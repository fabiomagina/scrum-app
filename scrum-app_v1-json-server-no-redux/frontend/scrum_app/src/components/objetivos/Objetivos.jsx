import React, { Component } from "react";
import Main from "../Main";
import axios from "axios";
import './Objetivos.css'
import ListObjetivos from "./ListObjetivos"
import MainForm from "./MainForm"

const initialState = {
    obj: { title: '', etapas: [] },
    lista: [],
    etapa: { id: '', title: '', descricao: '', show: 1}
}

const baseUrl = 'http://localhost:3001/objetivos'

class Objetivos extends Component {

    constructor(props){
        super(props)
        this.state = { ...initialState }
        this.updateEtapa = this.updateEtapa.bind(this)
        this.removeEtapa = this.removeEtapa.bind(this)
        this.removeEtapaById = this.removeEtapaById.bind(this)
        this.getEtapasVisiveis = this.getEtapasVisiveis.bind(this)
        this.load = this.load.bind(this)
        this.remove = this.remove.bind(this)
        this.updateField = this.updateField.bind(this)
        this.updateNewEtapa = this.updateNewEtapa.bind(this)
        this.save = this.save.bind(this)

    }

    
    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    save() {
        const objetivo = this.state.obj
        const metodo = objetivo.id ? 'put' : 'post'
        const url = objetivo.id ? `${baseUrl}/${objetivo.id}` : `${baseUrl}`
        const obj = this.verificaNovaEtapa(objetivo)
        axios[metodo](url, obj)
            .then(resp => {
                const lista = this.getUpdatedList(resp.data)
                this.setState({ obj: initialState.obj, etapa: initialState.etapa, lista })
            })
    }

    verificaNovaEtapa(objetivo) {
        const etapa = this.state.etapa.title ? this.state.etapa : 0
        if (etapa) {
            objetivo.etapas.push(etapa)
        } 
        return objetivo
    
    }

    getUpdatedList(obj_at, add = true) {
        const lista = this.state.lista.filter(obj => obj.id !== obj_at.id)
        if (add) lista.unshift(obj_at)
        return lista
    }

    getEtapasVisiveis(obj) {
        const etapas = obj.etapas.filter(etapa => etapa.show === 1)
        obj.etapas = etapas
        return obj
    }

    getEtapaNewId() {
        const obj = this.state.obj
        const newId = obj.etapas.pop().id + 1
        return newId
    }

    clear() {
        this.setState({ obj: initialState.obj, etapa: initialState.etapa })
        // renderEtapa()
    }

    updateField(evento) {
        const obj = { ...this.state.obj }
        obj[evento.target.name] = evento.target.value
        this.setState({ obj })
    }


    load(obj) {
        const obj_ = this.getEtapasVisiveis(obj)
        this.setState({ obj : obj_ })
        console.log(obj)
    }


    remove(obj) {
        axios.delete(`${baseUrl}/${obj.id}`).then(resp => {
            const lista = this.getUpdatedList(obj, false)
            this.setState({ lista })
        })
    }

    removeEtapa(e) {
        const obj = this.state.obj
        console.log(e)
        obj.etapas.splice(e.target.name, 1)
        this.setState({ obj })
    }

    removeEtapaById(obj, id) {
        obj.etapas.splice(id, 1)
        const url = `${baseUrl}/${obj.id}`
        axios.put(url, obj)
        .then(resp => {
            const lista = this.getUpdatedList(resp.data)
            this.setState({ lista })
        })
    }

    updateNewEtapa(evento) {
        const etapa = { ...this.state.etapa }
        etapa[evento.target.name] = evento.target.value
        this.setState({ etapa })
    }

    updateEtapa(evento) {
        const obj = { ...this.state.obj }
        obj.etapas[evento.target.name].title = evento.target.value
        this.setState({ obj })
    }


    render() {
        return (
            <Main icon="fa fa-graduation-cap" title="Objetivos">
                <MainForm obj={this.state.obj} etapa={this.state.etapa} clear={this.clear} updateEtapa={this.updateEtapa} removeEtapa={this.removeEtapa}
                            save={this.save} updateNewEtapa={this.updateNewEtapa}/>
                <ListObjetivos list={this.state.lista} getEtapasVisiveis={this.getEtapasVisiveis} load={this.load} 
                            removeEtapaById={this.removeEtapaById} remove={this.remove}/>

            </Main>
        )
    }
}

export default Objetivos;

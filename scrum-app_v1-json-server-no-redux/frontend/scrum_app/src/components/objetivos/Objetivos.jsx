import React, { Component } from "react";
import Main from "../Main";
import axios from "axios";
import './Objetivos.css'
import ListObjetivos from "./ListObjetivos"
import MainForm from "./MainForm"

const initialState = {
    obj: { title: '', etapas: [] },
    lista: [],
    etapa: { id: -1, title: '', descricao: '', show: 1 }
}

const baseUrl = 'http://localhost:3001/objetivos'

class Objetivos extends Component {

    constructor(props) {
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
        this.clear = this.clear.bind(this)
    }


    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    save(objetivo2) {
        const objetivo = this.state.obj
        const metodo = objetivo.id ? 'put' : 'post'
        const url = objetivo.id ? `${baseUrl}/${objetivo.id}` : `${baseUrl}`
        const obj = this.verificaNovaEtapa(objetivo)
        axios[metodo](url, obj)
            .then(resp => {
                const lista = this.getUpdatedList(resp.data)
                return lista
            })
            .then(lista => {
                const obj = objetivo2 ? objetivo2 : initialState.obj
                this.setState({ obj, lista}) 
                this.load(this.state.obj)
                
            })
          
            
            
    }

    verificaNovaEtapa(objetivo) {
        const etapa = this.state.etapa.title ? this.state.etapa : 0
        if (etapa) {
            etapa.id = this.getNewEtapaId()
            objetivo.etapas.push(etapa)
            this.setState({etapa: initialState.etapa})
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

    getNewEtapaId() {
        let obj = this.state.obj
        let newId = -1
        if (obj.etapas[0]) {
            newId = obj.etapas.length + 1
        }
        return newId
    }

    clear() {
        this.setState({ obj: initialState.obj, etapa: initialState.etapa })
    }

    updateField(evento) {
        const obj = { ...this.state.obj }
        console.log(evento.target.value)
        obj[evento.target.name] = evento.target.value
        this.setState({ obj })
    }


    load(obj, etapa_id) {
        const obj_ = this.getEtapasVisiveis(obj)
        const etapa = this.state.etapa
        console.log(etapa)
        if (etapa_id === undefined) etapa.id = -1
        else etapa.id = etapa_id
        this.setState({ obj: obj_, etapa })
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
        this.save()
        this.load(obj)
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

    updateEtapa(evento, type) {
        const obj = { ...this.state.obj }
        obj.etapas[evento.target.name][type] = evento.target.value
        this.setState({ obj })
    }

    etapaLoadWatcher() {

    }
    render() {
        return (
            <Main icon="fa fa-graduation-cap" title="Objetivos">
                <MainForm obj={this.state.obj} etapa={this.state.etapa} clear={this.clear} updateEtapa={this.updateEtapa} removeEtapa={this.removeEtapa}
                    save={this.save} updateNewEtapa={this.updateNewEtapa} updateField={this.updateField} id={this.state.etapa.id} load={this.load} />
                <ListObjetivos list={this.state.lista} getEtapasVisiveis={this.getEtapasVisiveis} load={this.load}
                    removeEtapaById={this.removeEtapaById} remove={this.remove} />

            </Main>
        )
    }
}

export default Objetivos;

import React, { Component } from "react";
import Main from "../Main";
import axios from 'axios'
// import './NovoObjetivo.css'
import { Link } from 'react-router-dom'

const baseUrl = 'http://localhost:3001/objetivos'

const initialState = {
    obj: { title: '', etapas: [] },
    list: []
}

class NovoObjetivo extends Component {
    state = { ...initialState }

    save() {
        const objetivo = this.state.obj
        const metodo = objetivo.id ? 'put' : 'post'
        const url = objetivo.id ? `${baseUrl}/${objetivo.id}` : `${baseUrl}`
        axios[metodo](url, objetivo)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ obj: initialState.obj, list })
            })
    }

    getUpdatedList(obj_at) {
        const list = this.state.list.filter(obj => obj.id !== obj_at.id)
        list.unshift(obj_at)
        return list
    }

    clear() {
        this.setState({ obj: initialState.obj })
    }

    updateField(evento) {
        const obj = { ...this.state.obj }
        obj[evento.target.name] = evento.target.value
        this.setState({ obj })
    }

    renderForm() {
        return (
            <><div className="form">
                <div className="row">
                    <div className="back-button">
                    <Link to="/objetivos">
                        <button>Voltar</button></Link>
                    </div>
                    <div className="form-group">
                        <label>Título: </label>
                        <input type="text" className="form-control"
                            name="title"
                            value={this.state.obj.title}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o Título do novo objetivo a longo prazo..." />
                    </div>

                </div>
            </div>

                <div className="buttons">
                    <div className="row-button">

                        <div className="button-row">
                            <button className="btn_cancel" onClick={e => this.clear()}>Cancelar</button>
                            <button className="btn_save" onClick={e => this.save(e)}>Salvar</button>
                        </div>
                    </div>
                </div>
            </>


        )
    }

    render() {
        return (
            <>


                <Main icon="fa fa-graduation-cap" title="Novo Objetivo">
                    {this.renderForm()}
                </Main></>


        )
    }
}



export default NovoObjetivo;

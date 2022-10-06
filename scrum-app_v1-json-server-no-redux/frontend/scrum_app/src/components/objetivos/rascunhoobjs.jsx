
    salvarNovaEtapa(objetivo) {
        const etapa = this.state.etapa.title ? this.state.etapa : 0
        if (etapa) {
            objetivo.etapas.push(etapa)
        } 
        return objetivo
    
    }

    
    updateEtapa(evento) {
        const obj = { ...this.state.obj }
        obj.etapas[evento.target.name].title = evento.target.value
        this.setState({ obj })
    }

    updateNewEtapa(evento) {
        const etapa = { ...this.state.etapa }
        etapa[evento.target.name] = evento.target.value
        this.setState({ etapa })
    }

    loadEtapa(evento) {
        const etapas = { ...this.state.obj.etapas }
        const etapa_id = evento.target.name
        const etapa = etapas[etapa_id]
        this.setState({ etapa })
    }

    <div className="form"></div>
    {this.renderEtapasForm()}
    {this.renderNovaEtapaForm()}

    renderEtapasForm() {
        return (
            this.state.obj.etapas.map(etapa => {
                const id_array = etapa.id - 1
                if (this.state.obj.etapas[id_array]) {
                    return (
                        <>
                            <div className="form-group">
                                <label className="label-etapas">etapa {etapa.id}: </label>
                                <div className="etapa-row">
                                    <input type="text" className="form-control"
                                        name={id_array}
                                        value={this.state.obj.etapas[id_array].title}
                                        onChange={e => this.updateEtapa(e)}
                                        placeholder="Digite uma nova etapa..." />
                                    <button className='etapa-delete-button' name={id_array} onClick={e => this.excluirEtapa(e)}>X</button>
                                </div>
                            </div>
                        </>
                    )
                }
            })
        )
    }

        renderNovaEtapaForm() {
        return (
            <div className="form-group">
                <label className="label-etapas">nova etapa: </label>
                <input type="text" className="form-control"
                    name='title'
                    value={this.state.etapa.title}
                    onChange={e => this.updateNewEtapa(e)}
                    placeholder="Digite uma nova etapa..." />
            </div>
        )
    }

    removeEtapa(e) {
        const obj = this.state.obj
        obj.etapas.splice(e.target.name, 1)
        this.setState({ obj })
    }
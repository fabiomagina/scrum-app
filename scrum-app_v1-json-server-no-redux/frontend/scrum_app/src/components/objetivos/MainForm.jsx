import EtapasForm from "./EtapasForm"
import { useState } from "react";
import { useEffect } from "react";


function MainForm(props) {
    const [novaEtapa, setNovaEtapa] = useState(false)
    useEffect(() => {
        console.log(novaEtapa)
        if (props.etapa.id !== -1 && props.etapa.id !== 0) setNovaEtapa(false)
    }, [props.etapa.id, novaEtapa])

    return (
        <>
            <div className="form" id={props.obj.title}>
                <div className="row">
                    <div className="back-button">
                            <button onClick={() => clear(props, setNovaEtapa)}>Início</button>
                    </div>
                    <div className="form-group">
                        <label>Objetivo: </label>
                        <input type="text" className="form-control obj-input"
                            name="title"
                            value={props.obj.title}
                            onChange={e => props.updateField(e)}
                            placeholder="Digite o Título do novo objetivo a longo prazo..." />
                    </div>
                </div>
            </div>
            <div className="form-group-etapas">
                <EtapasForm obj={props.obj} etapas={props.obj.etapas} updateEtapa={props.updateEtapa} removeEtapa={props.removeEtapa} id={props.id} load={props.load} />
                {NovaEtapaForm(props, novaEtapa)}
            </div>
            <div className="buttons">
                <div className="row-button">
                        <button onClick={() => 
                                handleNovaEtapa(props, setNovaEtapa)
                            } hidden={novaEtapa}> Nova Etapa</button>
                    <div className="button-row">
                        <button className="btn_save"
                            onClick={e => {
                                props.save()
                                setNovaEtapa(false)
                            }}>Salvar</button>
                        
                                

                    </div>
                </div>
            </div>
        </>
    )
}

function handleNovaEtapa(props, setNovaEtapa) {
    if (props.etapa.id !== -1) {
        props.load(props.obj)
        setNovaEtapa(true)
    }
    else {
        setNovaEtapa(true)
    }

}

function clear(props, setNovaEtapa) {
    props.clear()
    setNovaEtapa(false)
}

function NovaEtapaForm(props, novaEtapa) {
    if (novaEtapa) {
        return (
            <div>
                <div className="form-etapa-group" >
                    <div className="form-element">
                    <label className="label-etapas">nova etapa: </label>
                    <div className="etapa-row">
                        <input type="text" className="form-control"
                            name='title'
                            value={props.etapa.title}
                            onChange={e => props.updateNewEtapa(e)}
                            placeholder="Digite uma nova etapa..." />
                    </div>
                    </div>
                </div>
            </div>
        )
    }
    else return false
}


export default MainForm
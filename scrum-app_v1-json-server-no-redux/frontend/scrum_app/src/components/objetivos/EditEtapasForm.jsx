import EtapasForm from "./EtapasForm"
import { Link } from "react-router-dom";

function MainForm(props) {
    return (
        <>
            <div className="form" id="objetivos">
                <div className="row">
                    <div className="back-button">
                        <Link to="/objetivos">
                            <button onClick={e => props.clear()}>Voltar</button></Link>
                    </div>
                    <div className="form-group">
                        <label>Título: </label>
                        <input type="text" className="form-control"
                            name="title"
                            value={props.obj.title}
                            onChange={e => props.updateField(e)}
                            placeholder="Digite o Título do novo objetivo a longo prazo..." 
                            readOnly="readonly"/>
                    </div>
                </div>  
            </div>
            <div className="form-group-etapas">
                <EtapasForm etapas={props.obj.etapas} updateEtapa={props.updateEtapa} removeEtapa={props.removeEtapa}/>
                {NovaEtapaForm(props)}
            </div>
            <div className="buttons">
                <div className="row-button">
                    <div className="button-row">
                        <button className="btn_cancel" onClick={e => props.clear()}>Cancelar</button>
                        <button className="btn_save" onClick={e => props.save(e)}>Salvar</button>
                        <button className="btn_save" active="false"
                        onClick={() => renderNovaEtapaForm()}>Nova Etapa</button>
                    </div>
                </div>
            </div>
        </>
    )
}

function NovaEtapaForm(props) {
    return (
        <div className="form-etapa-group" id="etapa_div" hidden>
            <label className="label-etapas">nova etapa: </label>
            <input type="text" className="form-control"
                name='title'
                value={props.etapa.title}
                onChange={e => props.updateNewEtapa(e)}
                placeholder="Digite uma nova etapa..." />
        </div>
    )
}

function renderNovaEtapaForm() {
    const element = document.getElementById('etapa_div')
    element.removeAttribute('hidden')
}

export default MainForm
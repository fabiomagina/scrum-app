import React from 'react'

function EtapasForm(props) {
    let i = -1
    return (
        props.etapas.map(etapa => {
            
            i++
            if (props.etapas[i]) {
                return (
                    <div key={i}>
                        <div className="">
                            <label className="label-etapas">etapa {i + 1}: </label>
                            <div className="etapa-row">
                                <input type="text" className="form-control"
                                    name={i}
                                    value={props.etapas[i].title}
                                    onChange={props.updateEtapa}
                                    placeholder="Digite uma nova etapa..." />
                                <button className='etapa-delete-button' name={i} 
                                onClick={props.removeEtapa}>X</button>
                            </div>
                        </div>
                    </div>
                )
                
            } else return null
        })
    )
}

export default EtapasForm;
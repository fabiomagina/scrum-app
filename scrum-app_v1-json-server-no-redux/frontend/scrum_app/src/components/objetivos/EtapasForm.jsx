import React from 'react'

function EtapasForm({ etapas, id, updateEtapa, removeEtapa, load, obj }) {
    if (id === -1) {
        return (
            etapas.map((etapa, i) => {
                id++
                if (etapas[id]) {
                    return (
                        <div className="etapa-list" key={id}>
                            <div className="etapa-row">
                                <label className="label-etapas">{id + 1}-  </label>
                                <input type="text" className="form-control"
                                    name={id}
                                    value={etapas[id].title}
                                    onChange={updateEtapa}
                                    placeholder="Digite uma nova etapa..." />
                                    <button className='etapa-delete-button' name={id}
                                onClick={() => load(obj, i)}><i className="fa fa-pencil"></i></button>
                                <button className='etapa-delete-button' name={id}
                                    onClick={removeEtapa}>X</button>

                            </div>
                        </div>
                    )

                } else return null
            })
        )
    }
    else {
        if (etapas[id]) {
            return (
                <div key={id}>

                    <div className="form-element">
                        <label className="label-etapas">Título: </label>
                        <div className="etapa-row">
                            <input type="text" className="form-control"
                                name={id}
                                value={etapas[id].title}
                                onChange={e => updateEtapa(e,'title')}
                                placeholder="Digite uma nova etapa..." />
                            <button className='etapa-delete-button' name={id}
                                onClick={removeEtapa}>X</button>
                                
                        </div>
                    </div>
                    <div className="form-element">
                        <label className="label-etapas">Descrição: </label>
                        <div className="etapa-row"> 
                            <textarea type="text" className="form-control"
                                cols="40" rows="5"
                                name={id}
                                value={etapas[id].description}
                                onChange={e=> updateEtapa(e, 'description')}
                                placeholder="Digite a descrição da etapa..." />

                        </div>
                    </div>
                </div>
            )
        } else return null
    }
}

export default EtapasForm;
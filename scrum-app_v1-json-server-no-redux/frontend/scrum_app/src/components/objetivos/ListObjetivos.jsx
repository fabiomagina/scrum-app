import React from 'react'

const renderRows = (props) => {
    return props.list.map(obj => {
        const obj_ = props.getEtapasVisiveis(obj)
        
        return (
            <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{
                    obj_.etapas.map((etapa, i) => {
                        let etapas = <li key={i} className="etapas">{i+1}- {etapa.title} 
                    <button className="btn-etapas-load" title="editar" name={etapa.id} obj={obj}
                        onClick={e => {
                            props.load(obj, i);
                        }}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn-etapas-remove"
                        onClick={() => props.removeEtapaById(obj, i)}>
                        <i className="fa fa-trash"></i>
                    </button></li>
                        return etapas
                    })
                }</td>

                <td>
                    <button className="btn btn-warning" title="editar"
                        onClick={() => props.load(obj)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger ml-2"
                        onClick={() => props.remove(obj)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
        
    })
}

function renderTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Etapas</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows(props)}
            </tbody>
        </table>
    )
}

export default renderTable
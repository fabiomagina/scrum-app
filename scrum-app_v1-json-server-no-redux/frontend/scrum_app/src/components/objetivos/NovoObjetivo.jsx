import React from "react";
import './NovoObjetivo.css'

function NovoObjetivo(props) {
    return (
        <div className="container-2">
            <div className="formulario-box">
                <form>
                    <label for="title">Nomeie o objetivo:</label>
                    <input id="title" placeholder="Objetivo Número 1"></input>
                </form>
            </div>

            <form>
                <label for="title">Nomeie o objetivo:</label>
                <input id="title" placeholder="Objetivo Número 1"></input>
            </form>
        </div>
    )


}

export default NovoObjetivo
import { Routes, Route } from "react-router-dom"
import React from "react"
import Dashboard from "../components/dashboard/Dashboard"
import Daily from "../components/daily/Daily"
import Sprints from "../components/sprints/Sprints"
import Objetivos from "../components/objetivos/Objetivos"
import Concluidos from "../components/concluidos/Concluidos"
import NovoObjetivo from "../components/objetivos/NovoObjetivo"

const Routas = props => (
    <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/sprints" element={<Sprints />} />
        <Route path="/objetivos" element={<Objetivos />} />
        <Route path="/concluidos" element={<Concluidos />} />
        <Route path="/novoobjetivo" element={<NovoObjetivo />} />


    </Routes>
)

export default Routas
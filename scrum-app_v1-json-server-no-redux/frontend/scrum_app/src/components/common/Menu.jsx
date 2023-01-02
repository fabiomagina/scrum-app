import './Menu.css';
import Logo from "assets/scrumlogo.png"
import { Link } from 'react-router-dom'

function Menu() {
  return (
    
    <aside className="menu">
        <figure>
            <img src={Logo} className="logo" alt=""></img>
        </figure>
        <Link to="/"><i className="fa fa-tv"/> Dashboard</Link>
        <Link to="/daily">Daily <i className="fa fa-check-square-o"/></Link>
        <Link to="/sprints">Sprints <i className="fa fa-fighter-jet"/></Link>
        <Link to="/objetivos"><i className="fa fa-graduation-cap"/> Objetivos</Link>
        <Link to="/concluidos">Concluidos <i className="fa fa-handshake-o"/></Link>
    </aside>
  );
}

export default Menu;

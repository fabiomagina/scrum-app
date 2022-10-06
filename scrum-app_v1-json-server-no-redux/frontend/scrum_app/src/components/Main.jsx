import './Main.css';
import Header from './Header';
import React from 'react';

function Main(props) {
  return (
    <div>
      <Header icon={props.icon} title={props.title}/>
      <div className="box">

      <div className="main">{props.children}</div>

      </div>
    </div>
  );
}

export default Main;

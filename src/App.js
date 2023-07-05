import React, {Component} from "react";
import "./style.css";

function MiComponente(){
  return <p>Mi Componente</p>
}

class MiComponenteDeClase extends Component{
  render(){
    return <p>Mi Componente de Clase</p>
  }
}

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <MiComponente/>
      <MiComponenteDeClase/>
    </div>
  );
}

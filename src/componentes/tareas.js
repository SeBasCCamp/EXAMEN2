import React from "react";

function Tareas(props){
    return(
        <table>
            <tbody>
                <td>{props.id}</td>
                <td>{props.nombre}</td>
                <td>{props.indicador}</td>
                <td>{props.numberID}</td>
            </tbody>
        </table>
    )
}

export default Tareas;
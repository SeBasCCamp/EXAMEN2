import React from "react";
import '../estilos/botones.css'
function Botones(props){
    return(
        <button type="submit" language="ES">{props.descripcion}</button>
    )
}

export default Botones;
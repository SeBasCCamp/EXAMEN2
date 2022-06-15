import React from "react";

function ProyectType(props){
    return(
        <div className="principal">
           <label for="name">
                {props.name}
            </label>
            <input type={props.tipo} name="name" />
        </div>
    );
}

export default ProyectType;
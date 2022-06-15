import React from "react";
import '../estilos/proyectInfo.css'

function ProjectInfo(props){
    return(
        <div className="agrupador">
        
          <div className="fomr-principal">
            <form>
              <label for="name">
                {props.name}
              </label>
              <input type={props.tipo} name="name" />
            </form>
          </div>
         </div>
    )
}


export default ProjectInfo;
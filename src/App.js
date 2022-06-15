import './App.css';
import ProjectInfo from './componentes/projectinfo';
import ProyectType from './componentes/proyectType';
import Botones from './componentes/botones';
import Tareas from './componentes/tareas';

function App() {
  return (
    <div className="App">
      <div className='agrupador-prin'>
        <header>
          <h1>A web Page</h1>
        </header>
        <div className='tarjetas-prim'>
        <div className='tarjeta1'>
        <h2>Paso 1: Registre su proyecto</h2>
        <ProjectInfo 
          name = 'Nombre: '
          tipo  = "text"
        />
        <ProjectInfo 
          name = 'Fecha Inicio: '
          tipo  = "date"
        />
        <ProjectInfo 
          name = 'Fecha Fin: '
          tipo  = "date"
        />
        <ProjectInfo 
          name = 'Prioridad: '
          tipo  = "number"
        />
        </div>

        <div className='tarjeta2'>
        <h3>Tipo de Proyecto</h3>
        <h4>Tecnologías</h4>
        <ProyectType
          tipo  = "checkbox"
          name = "HTML"
        />
        <ProyectType
          tipo  = "checkbox"
          name = "CSS"
        />
        <ProyectType
          tipo  = "checkbox"
          name = "Javascript"
        />
        </div>
        </div>
      
        <div className='botones'>
          <Botones 
            descripcion = 'Guardar'
          />
          <Botones 
            descripcion = 'Cancelar'
          />
        </div>
          <div className='tarjeta-3'>
            <h2>Paso 2: Registre las tareas de su proyecto</h2>
            <h3>Aquí algunos ejemplos</h3>
            <table>
              <tr>
                <thead>
                <td>ID</td>
                <td>Nombre</td>
                <td>Indicador Terminado</td>
                <td>ID Proyecto</td>
                </thead>
                <Tareas 
                  id='1'
                  nombre='capture requirements'
                  indicador='false'
                  numberID='1'
                />
              </tr> 
            </table>
          </div>
        </div>
      </div> 
    
  );
}

export default App;

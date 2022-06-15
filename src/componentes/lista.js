import React from "react";

const List = ()=>{
    const [allProjects, setAllProjects] = React.useState([])

    React.useEffect(() => {
        async function getProjects(){
            const res = await fetch("https://task-node-api-rest.herokuapp.com/tasks")
            const data = await res.json()
            setAllProjects(data)

        }
        getProjects()
    }, [])

    return(
        <div className="card mt-3">
            <div className="card-header">
                
            </div>
            
            <div className="card-body">
                <table className="table">
                    <tbody> 
                       {allProjects.map((project) => (
                        <tr key={project.id}>
                            <td>{project.id}</td>
                            <td>{project.name}</td>
                            <td>{project.priority}</td>
                            <td>{project.description}</td>   
                        </tr>
                        ))}
                    </tbody>
                </table>
                 </div> 
            <div className="card-footer text-muted">

            </div>
        </div>
    )
}
export default List
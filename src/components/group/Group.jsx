import { useParams,Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./group.scss"
import Task from "../task/Task";
import { useEffect } from "react";
const Group = () => {

    const {groupId} = useParams();
    console.log("group id is : ",groupId)

    const {
        data,
        loading,
        error,
        myFetch
    } = useFetch();

    useEffect(()=>{
        myFetch(`/groups/${groupId}/tasks`);
    },[])

    if (error||loading) return ("");
    console.log(data);

    
    return (
        <>
        {error
        ? <p>Some error</p>
        :

        <div id="wtf" className="home-page">
            <section>
            <h2>{data.length>0 && data[0].taskGroup.name} logs:({data.length})</h2>
            <button className="new-task"
                    onClick={()=>navigate("/tasks/new")}
            >New </button>
            <Link to={"/"}>Home page</Link>
            </section>
    
            {data && data.length>0 &&
                <div className="tasks-container">
                    {data.map(task=>(
                        <Task task={task} key={task.id}/>
                    ))}
                </div>
            }
        </div>
        }

        </>
    );
}
 
export default Group;
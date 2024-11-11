import { useParams,Link, useNavigate, useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./group.scss"
import Task from "../task/Task";
import { useEffect } from "react";
const Group = () => {

    const {groupId} = useParams();
    const [searchParam] = useSearchParams();
    const group_name = searchParam.get("name");
    console.log("group id is : ",groupId)
    const navigate = useNavigate();

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
    console.log("heyY",data);

    
    return (
        <>
        {error
        ? <p>Some error</p>
        :

        <div id="wtf" className="home-page">
            <section>
            <h2>{group_name? group_name: data.length>0 &&data[0].taskGroup.name} logs:({data.length})</h2>
            <button className="new-task"
                    onClick={()=>navigate(`/tasks/new?group_id=${groupId}`)}
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
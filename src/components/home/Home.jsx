import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import Task from "../task/Task";
import "./home.scss"
import { useNavigate } from "react-router-dom";


const Home = () => {
    const {data,setData,loading,error,myFetch} = useFetch();
    const navigate = useNavigate();
    console.log("IN HOME")

    useEffect(()=>{
        myFetch("/tasks")
    },[])

    if (loading){
        return <>Loading</>
    }
    // if (data) console.log(data);

    const handleDelete = async (taskId)=>{
        const res = await fetch(`http://localhost:8080/tasks/${taskId}`,{
            mode:"cors",
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if (res.ok){
            setData(data.filter(a=>a.id!==taskId))
        }
    }
    console.log("::",data);



    return (
        <>
        {error
        ? <p>Some error</p>
        :

        <div id="wtf" className="home-page">
            <section>
                <h2>All Task Logs ({data.length})</h2>
                <button className="new-task"
                        onClick={()=>navigate("/tasks/new")}
                >New Task </button>
                <button className="new-task"
                        onClick={()=>navigate("/groups/new")}
                >New group</button>
                <a
                    onClick={()=>navigate("/groups")}
                >View Groups</a>
            </section>
 
            {data && data.length>0 &&
                <div className="tasks-container">
                    {data.map(task=>(
                        <Task task={task} key={task.id}
                            handleDelete={handleDelete}
                        />
                    ))}
                </div>
            }
        </div>
        }

        </>
    );
}
 
export default Home;
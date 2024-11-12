// import { IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import "./task.scss"
import { format } from "date-fns";

const Task = ({
    task,
    handleDelete
}) => {
    // console.log("===>",task.dateCompleted);
   const formattedDate = format(new Date(task.dateCompleted),"d MMM yyyy")
   const navigate = useNavigate();

   const handleClick=(e)=>{
        if (e.target.value!=="null"){
            navigate(`/groups/${task.taskGroup.id}?name=${task.taskGroup.name}`)
        }
   }

   


    return (
        <article className="task">
            <span>{formattedDate}</span>
            <p>{task.description}</p>
            {task.taskGroup && task.taskGroup.name
                ?<span onClick={handleClick}className="task-group">{task.taskGroup.name}</span>
                :<span onClick={handleClick}className="task-group null">null</span>
                
            }


            {/* <span onClick={handleClick}className="task-group">
                {task.taskGroup && task.taskGroup.name
                ?task.taskGroup.name
                : "null"
                }
            </span> */}

            <span className="task-options">
            <button
                onClick={()=>handleDelete(task.id)}
            >delete</button>
            <button
                onClick={()=>navigate(`/tasks/update/${task.id}?date_completed=${task.dateCompleted}&description=${encodeURIComponent(task.description)}&group_id=${task.taskGroup? task.taskGroup.id : null}`)}
            >update</button>
            </span>


        </article>
    );
}
 
export default Task;

/*
we need to decixe on the UI 
<Data> <desc> <group> 

make it a box that just sticks out ig

*/
import { Form, useNavigate, useParams, useSearchParams,Link } from "react-router-dom";
import "../createTask/createTask.scss"
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
const UpdateTask = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const {taskId} = useParams();
    const query_date_completed = searchParams.get("date_completed");
    console.log(query_date_completed,"---------")
    const query_description = searchParams.get("description");
    const query_group_id = Number(searchParams.get("group_id"));
    console.log(query_group_id,"hahha")


    const navigate = useNavigate();
    const {data,loading,error,myFetch} = useFetch();
    const {loading:submitLoading,error:submitError,myFetch:submitFetch} = useFetch();
    useEffect(()=>{        
        myFetch(`/groups`) //get all the groups 
    },[])


    if (loading || error) return ("")


    const handleSubmit = async (e)=>{
        e.preventDefault();
        const description = e.target.description.value;
        const date_completed = e.target.date_completed.value;
        console.log("ya",date_completed)
        const group_id =  e.target.group.value===""? null : e.target.group.value;
        await submitFetch(`/tasks/${taskId}`,{
            method:"PATCH",
            body:JSON.stringify({ //date_completed, group_id, description
                id:taskId,
                description,
                date_completed,
                group_id
            })
        })
        if (!submitError){
            navigate("/")
        }
    }

    return (
        <main className="create_task_page">
            <h2>Update Task Form</h2>
            <Form onSubmit={handleSubmit}>
                
            <Link to={"/"} >Back to Home page</Link>
                <input 
                    id="sksk"
                    required 
                    name="date_completed" 
                    type="date"
                    defaultValue={query_date_completed}
                 />
                <input 
                    required 
                    name="description" 
                    type="text" 
                    placeholder="Description..."
                    defaultValue={query_description}
                    
                    />
                
                <select name="group" id="">
                    <option value="">null</option>
                    {data && data.length>0 && data.map(group=>(
                        group.id==query_group_id
                        ?<option selected value={group.id}>{group.name}</option>
                        :<option value={group.id}>{group.name}</option>
                    ))}
                </select>
                {error &&
                <p>Error: {error}</p>
                }
                <button disabled={submitLoading} className="submit">Submit</button>
            </Form>
        </main>

    );
}
 

export default UpdateTask;
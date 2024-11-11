import { Form, useNavigate, useSearchParams } from "react-router-dom";
import "./createTask.scss"
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useRef } from "react";
const CreateTask = () => {
    const navigate = useNavigate();
    const [searchParams]= useSearchParams();
    const groupId = Number(searchParams.get("group_id")); //Optional
    const {data,loading,error,myFetch} = useFetch();
    const {loading:submitLoading,error:submitError,myFetch:submitFetch} = useFetch();
    useEffect(()=>{        
        myFetch("/groups") //get all the groups 
    },[])

    const date = new Date()
    const defaultDate = date.toISOString().substring(0,10);

    if (loading || error) return ("")


    const handleSubmit = async (e)=>{
        e.preventDefault();
        // console.log(e.target.group.value);
        const description = e.target.description.value;
        const date_completed = e.target.date_completed.value;
        console.log("ya",date_completed)
        const group_id =  e.target.group.value===""? null : e.target.group.value;
        await submitFetch("/tasks",{
            method:"POST",
            body:JSON.stringify({ //date_completed, group_id, description
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
            <h2>Create Task Form</h2>
            <Form onSubmit={handleSubmit}>
                <input 
                    id="sksk"
                    required 
                    name="date_completed" 
                    type="date"
                    defaultValue={defaultDate}
                 />
                <input required name="description" type="text" placeholder="Description..."/>
                
                <select name="group" id="">
                    <option value="">null</option>
                    {data && data.length>0 && data.map(group=>(
                        group.id===groupId
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
 

export default CreateTask;
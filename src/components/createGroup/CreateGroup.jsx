import { Form, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";


export default function CreateGroup(){
    const navigate = useNavigate();
    const {data,loading,error,myFetch} = useFetch();
    const {loading:submitLoading,error:submitError,myFetch:submitFetch,setError} = useFetch();

    useEffect(()=>{
        myFetch("/groups")
    },[submitError,submitLoading])

    if (loading||error) return("")

    const handleSubmit= async (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        console.log(data);
        data.map(group=>{
            if (group.name===name){
                console.log("in use")
                setError("Name already in use.")
            }
        })
        const success = await submitFetch("/groups",{
            method:"POST",
            body:JSON.stringify({
                name:e.target.name.value,
                color:"blank"
            })
        })
        console.log("submitted group")
        console.log(submitError)

        if (success){
            navigate("/")
        }
    }

    return (
        <main className="create_task_page">
            <h2>Create new group</h2>
            <Form onSubmit={handleSubmit}>
                <input name="name" required type="text" placeholder="Name of group" />
                {error && <p className="error-msg">{error}</p>}
                <button disabled={submitLoading}className="submit">Submit</button>
            </Form>

        </main>

    )
}
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./browseGroups.scss"
import GroupCard from "../GroupCard/GroupCard";
import { useNavigate } from "react-router-dom";
const BrowseGroups = () => {
    const navigate = useNavigate();

    const{
        data:groups,
        setData,
        loading,
        error,
        myFetch:fetchGroups
    } = useFetch();

    useEffect(()=>{
        fetchGroups("/groups")//select all groups
    },[])

    const handleDelete = async (groupId)=>{
        const res = await fetch(`http://localhost:8080/groups/${groupId}`,{
            mode:"cors",
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if (res.ok){
            setData(groups.filter(a=>a.id!==groupId))
        }
    }


    if (loading||error) return ("...");
    console.log("===>",groups)
        
    return ( 
        <main className="browse-groups-page">
            <section>
                <h2>All Groups ({groups.length})</h2>
                <button className="new-group"
                    onClick={()=>navigate("/groups/new")}
                >New group</button>
                <a
                    onClick={()=>navigate("/")}
                >View Tasks</a>
            </section>
            {groups && groups.length>0 &&
            groups.map(group=>(
                <GroupCard 
                    group={group}
                    handleDelete={handleDelete}
                />
            ))}
        </main>
    );
}
 
export default BrowseGroups;
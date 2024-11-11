import { Link, useNavigate } from "react-router-dom";
import "./groupCard.scss"
const GroupCard = ({group,handleDelete}) => {

    //id
    //name
    //functionality buttons
    
    const navigate = useNavigate();
    return (
        <article className="group-card">
            <a
                Link={`/groups/${group.id}`}
                onClick={()=>navigate(`/groups/${group.id}?name=${encodeURIComponent(group.name)}`)}
            >{group.name}
            </a>
            <span className="group-options">
            <button
                onClick={()=>handleDelete(group.id)}
            >
                delete
            </button>
            <button
                onClick={()=>navigate(`/groups/update/${group.id}?name=${encodeURIComponent(group.name)}`)}
            >
                update
            </button>

            </span>


        </article>
    );
}
 
export default GroupCard;
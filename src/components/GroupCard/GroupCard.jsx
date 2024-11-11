import { Link, useNavigate } from "react-router-dom";
import "./groupCard.scss"
const GroupCard = ({group}) => {

    //id
    //name
    //functionality buttons
    
    const navigate = useNavigate();
    return (
        <article className="group-card">
            <a
                Link={`/groups/${group.id}`}
                onClick={()=>navigate(`/groups/${group.id}`)}
            >{group.name}
            </a>
            <span className="group-options">
            <button>
                delete
            </button>
            <button>
                update
            </button>

            </span>


        </article>
    );
}
 
export default GroupCard;
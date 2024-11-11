import { useNavigate } from "react-router-dom";
import "./header.scss"
const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <p onClick={()=>navigate("/")}>Task Logger</p>
            <nav>
                {/* <a href="">test</a>
                <a href="">test</a>
                <a href="">test</a> */}
            </nav>


        </header>
    );
}
 
export default Header;
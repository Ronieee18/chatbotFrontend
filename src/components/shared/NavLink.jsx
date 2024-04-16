import { Link } from "react-router-dom";
const NavLink=(props)=>{
    return (<Link to={props.to}
        className="nav-link"
        onClick={props.onClick}
     style={{background:props.bg,color:props.textColor}}>
        {props.text}
        </Link>)
}
export default NavLink
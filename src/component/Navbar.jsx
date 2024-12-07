import logo from "../assets/react-logo.png";
import './Navbar.css'
export default function Navbar(){
    return(
        <>
        <div className="Navbar">
            <img src={logo} alt="logo" className="nav-logo" />
            <span className="nav-span">ReactFacts</span>
        </div>
        
        </>
    )
}
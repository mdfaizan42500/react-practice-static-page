import logo from "./assets/react-logo.png"
function Header() {
    return(
      <header className="header">
        <img src= {logo} className="react-logo" alt="React logo" />
        <nav>
            <ul className="nav-list">
                <li className="list-item">About</li>
                <li className="list-item">Contact</li>
                <li className="list-item">Pricing</li>
            </ul>
        </nav>
      </header>
    )
}
export default Header
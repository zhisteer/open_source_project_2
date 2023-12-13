import { NavLink } from "react-router-dom"
import { useCookies } from "react-cookie";

export default function Navbar() {
    const [cookies, setCookies] = useCookies(["access_token"]);

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        
    }

    return (
        <nav className="container-fluid">
            <ul>
                <li><strong><NavLink to="/">Koreigners</NavLink></strong></li>
            </ul>
            <ul>
                <li><NavLink to="/discuss">Discuss</NavLink></li>
                {
                !cookies.access_token ? (
                <li> <NavLink to="/login" role="button">Login</NavLink></li>
                ) : (
                <li> <button onClick={logout}>Logout</button></li>
                )}

            </ul>
        </nav>
    );
}
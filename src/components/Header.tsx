import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    return (
        <header>
            <Link to={"/home"} className="logo">
                Logo
            </Link>
            <ul>
                <Link to={"/films"}> Films</Link>
                <Link to={"/planets"}> Planets</Link>
                <Link to={"/peoples"}> Peoples</Link>
                <Link to={"/vehicles"}> Vehicles</Link>
                <Link to={"/planets"}> Planets</Link>
            </ul>
            <ThemeToggle />
        </header>
    );
};

export default Header;

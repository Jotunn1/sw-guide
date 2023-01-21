import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo">Header</div>
            <ul>
                <Link to={"/films"}> Films</Link>
                <Link to={"/planets"}> Planets</Link>
                <Link to={"/peoples"}> Peoples</Link>
                <Link to={"/vehicles"}> Vehicles</Link>
                <Link to={"/planets"}> Planets</Link>
            </ul>
            <div className="toggle">toggle</div>
        </header>
    );
};

export default Header;

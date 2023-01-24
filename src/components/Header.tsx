import { Link, useLocation } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const location = useLocation().pathname;
    const pages = [
        "/films",
        "/planets",
        "/characters",
        "/vehicles",
        "/starships",
        "/species",
    ];
    return (
        <header>
            <Link to={"/home"} className="logo">
                Logo
            </Link>
            {location !== "/home" && (
                <ul>
                    {pages.map((el) => (
                        <HeaderLink linkTo={el} isActive={location === el}/>
                    ))}
                </ul>
            )}

            <ThemeToggle />
        </header>
    );
};

export default Header;

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
            <Link to={"/"} className="logo">
                Logo
            </Link>
            {location !== "/" && (
                <ul>
                    {pages.map((el, index) => (
                        <HeaderLink
                            key={index}
                            linkTo={el}
                            isActive={location.includes(el)}
                        />
                    ))}
                </ul>
            )}

            <ThemeToggle />
        </header>
    );
};

export default Header;

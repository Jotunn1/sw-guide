import { Link } from "react-router-dom";

const HeaderLink = (props: { linkTo: string; isActive: boolean }) => {
    const removeFirstSlash = (str: string) => str.substr(1);
    return (
        <Link
            to={props.linkTo}
            className={`header-link ${props.isActive ? "active" : ""}`}
        >
            {removeFirstSlash(props.linkTo)}
            <div className="line"></div>
        </Link>
    );
};

export default HeaderLink;

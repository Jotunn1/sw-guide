import { Link } from "react-router-dom";

type HeaderLinkProps = {
  linkTo: string;
  isActive: boolean;
};

const HeaderLink = ({ linkTo, isActive }: HeaderLinkProps) => {
  const removeFirstSlash = (str: string) => str.substr(1);
  
  return (
    <Link to={linkTo} className={`header-link ${isActive ? "active" : ""}`}>
      {removeFirstSlash(linkTo)}
      <div className="line"></div>
    </Link>
  );
};

export default HeaderLink;

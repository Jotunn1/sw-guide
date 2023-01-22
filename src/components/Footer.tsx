import { ReactComponent as InstagramLogo } from "../assets/images/social/instagram.svg";
import { ReactComponent as GithubLogo } from "../assets/images/social/githublogo.svg";
import { ReactComponent as LinkedInLogo } from "../assets/images/social/linkedin.svg";
import SocialLink from "./SocialLink";

const Footer = () => {
    const socialList = [
        {
            title: "Github",
            link: "https://github.com/Jotunn1",
            icon: <GithubLogo />,
        },
        {
            title: "LinkedIn",
            link: "www.linkedin.com/in/ihor-bozhuk-aba4451a8",
            icon: <LinkedInLogo />,
        },
        {
            title: "Instagram",
            link: "https://www.instagram.com/ihor_bozhuk/",
            icon: <InstagramLogo />,
        },
    ];
    return (
        <footer>
            <div className="left-side">
                My contacts :{" "}
                <ul className="social-list">
                    {socialList.map((el,index) => (
                        <SocialLink key={index} title={el.title} link={el.link} icon={el.icon} />
                    ))}
                </ul>
            </div>
            <div className="right-side">
                Developed by Ihor Bozhuk © 2023
            </div>
        </footer>
    );
};

export default Footer;

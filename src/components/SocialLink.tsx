import { ReactElement } from "react";


const SocialLink = (props: socialLinkProps) => {
    return (
        <a className="social-link" href={props.link} target="_blank">
            {props.icon} {props.title}
        </a>
    );
};

type socialLinkProps = {
    link: string;
    title: string;
    icon: ReactElement;
};

export default SocialLink;

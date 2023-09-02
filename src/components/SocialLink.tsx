import { ReactElement } from "react";

type SocialLinkProps = {
  link: string;
  title: string;
  icon: ReactElement;
};

const SocialLink = ({ link, title, icon }: SocialLinkProps) => {
  return (
    <a className="social-link" href={link} target="_blank">
      {icon} {title}
    </a>
  );
};

export default SocialLink;

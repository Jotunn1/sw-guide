import { Link } from "react-router-dom";
import ImageComponent from "../common/ImageComponent";

const CharacterCard = (props: CharacterCardProps) => {
  return (
    <Link to={`/planets/${props.id}`} className="card planet-card">
      <ImageComponent src={`characters/${props.id}.jpg`} alt={props.name} />
      <h2>{props.name}</h2>
    </Link>
  );
};

type CharacterCardProps = {
  name: string;
  id: number;
};

export default CharacterCard;

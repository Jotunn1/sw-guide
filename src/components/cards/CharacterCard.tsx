import { Link } from "react-router-dom";
import ImageComponent from "../common/ImageComponent";

type CharacterCardProps = {
  name: string;
  id: number;
};

const CharacterCard = ({ name, id }: CharacterCardProps) => {
  return (
    <Link to={`/characters/${id}`} className="card character-card">
      <ImageComponent src={`characters/${id}.jpg`} alt={name} />
      <h2>{name}</h2>
    </Link>
  );
};

export default CharacterCard;

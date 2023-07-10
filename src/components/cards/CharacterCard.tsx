import { Link } from "react-router-dom";

const CharacterCard = (props: CharacterCardProps) => {
  return (
    <Link to={`/planets/${props.id}`} className="card planet-card">
      <div className="image-wrapper">
        <img
          src={require(`../../assets/images/characters/${props.id}.jpg`)}
          alt={props.name}
        />
      </div>
      <h2>{props.name}</h2>
    </Link>
  );
};

type CharacterCardProps = {
  name: string;
  id: number;
};

export default CharacterCard;

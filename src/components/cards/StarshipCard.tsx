import { Link } from "react-router-dom";
import ImageComponent from "../common/ImageComponent";

type StarshipCardProps = {
  name: string;
  id: number;
};

const StarshipCard = ({ name, id }: StarshipCardProps) => {
  return (
    <Link to={`/starships/${id}`} className="card planet-card">
      <ImageComponent src={`starships/${id}.jpg`} alt={name} />
      <h2>{name}</h2>
    </Link>
  );
};

export default StarshipCard;

import { Link } from "react-router-dom";
import ImageComponent from "../common/ImageComponent";

type PlanetCardProps = {
  name: string;
  planetId: number;
};

const PlanetCard = ({ name, planetId }: PlanetCardProps) => {
  return (
    <Link to={`/planets/${planetId}`} className="card planet-card">
      <ImageComponent src={`planets/${planetId}.jpg`} alt={name + " planet"} />
      <h2>{name}</h2>
    </Link>
  );
};

export default PlanetCard;

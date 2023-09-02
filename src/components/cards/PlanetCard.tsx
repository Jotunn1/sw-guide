import { Link } from "react-router-dom";

type PlanetCardProps = {
  name: string;
  planetId: number;
};

const PlanetCard = ({ name, planetId }: PlanetCardProps) => {
  return (
    <Link to={`/planets/${planetId}`} className="card planet-card">
      <div className="image-wrapper">
        <img
          src={require(`../../assets/images/planets/${planetId}.jpg`)}
          alt={name + " planet"}
        />
      </div>
      <h2>{name}</h2>
    </Link>
  );
};

export default PlanetCard;

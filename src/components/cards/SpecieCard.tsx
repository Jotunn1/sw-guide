import { Link } from "react-router-dom";
import ImageComponent from "../common/ImageComponent";

type SpecieCardProps = {
  name: string;
  id: number;
};

const SpecieCard = ({ name, id }: SpecieCardProps) => {
  return (
    <Link to={`/species/${id}`} className="card planet-card">
      <ImageComponent src={`species/${id}.jpg`} alt={name + " Specie"} />
      <h2>{name}</h2>
    </Link>
  );
};

export default SpecieCard;

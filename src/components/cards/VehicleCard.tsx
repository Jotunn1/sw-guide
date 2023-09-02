import { Link } from "react-router-dom";
import ImageComponent from "../common/ImageComponent";

type VehicleCardProps = {
  name: string;
  id: number;
};

const VehicleCard = ({ name, id }: VehicleCardProps) => {
  return (
    <Link to={`/vehicles/${id}`} className="card planet-card">
      <ImageComponent src={`vehicles/${id}.jpg`} alt={name + " vehicle"} />
      <h2>{name}</h2>
    </Link>
  );
};

export default VehicleCard;

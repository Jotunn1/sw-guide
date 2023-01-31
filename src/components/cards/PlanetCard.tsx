import { Link } from "react-router-dom";

const PlanetCard = (props: PlanetCardProps) => {
    return (
        <Link to={`/planets/${props.planetId}`} className="card planet-card">
            <div className="image-wrapper">
                <img
                    src={require(`../../assets/images/planets/${props.planetId}.jpg`)}
                    alt={props.name + " planet"}
                />
            </div>
            <h2>{props.name}</h2>
        </Link>
    );
};

type PlanetCardProps = {
    name: string;
    planetId: number;
};

export default PlanetCard;

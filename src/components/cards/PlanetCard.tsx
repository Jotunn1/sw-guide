import { Link } from "react-router-dom";

const PlanetCard = (props: PlanetCardProps) => {
    return (
        <Link to={`/films/${props.episodeId}`} className="card film-card">
            <div className="film-title">
                <div className="image-wrapper">
                    <img
                        src={require(`../../assets/images/films/${props.episodeId}.jpg`)}
                        alt={props.title + " poster"}
                    />
                </div>
            </div>
            <h3> {props.release_date.substring(0, 4)}</h3>
        </Link>
    );
};

type PlanetCardProps = {
    title: string;
    episodeId: number;
    release_date: any;
};

export default PlanetCard;

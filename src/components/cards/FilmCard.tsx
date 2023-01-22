import { Link } from "react-router-dom";

const FilmCard = (props: filmCardProps) => {
    enum Episodes {
        I = 4,
        II = 5,
        III = 6,
        IV = 1,
        V = 2,
        VI = 3,
    }

    return (
        <Link to={`/films/${props.episodeId}`} className="card film-card">
            <div className="film-title">
                <div className="image-wrapper">
                    <img
                        src={require(`../../assets/images/films/${props.episodeId}.jpg`)}
                        alt={props.title + " poster"}
                    />
                </div>
                <h2>
                    Episode {Episodes[props.episodeId]} : {props.title}
                </h2>
            </div>
            <h3> {props.release_date.substring(0, 4)}</h3>
        </Link>
    );
};

type filmCardProps = {
    title: string;
    episodeId: number;
    release_date: any;
};

export default FilmCard;

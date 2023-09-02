import { Link } from "react-router-dom";
import ImageComponent from "../common/ImageComponent";

type FilmCardProps = {
  title: string;
  episodeId: number;
  release_date: any;
};

enum Episodes {
  I = 4,
  II = 5,
  III = 6,
  IV = 1,
  V = 2,
  VI = 3,
}

const FilmCard = ({ title, episodeId, release_date }: FilmCardProps) => {
  return (
    <Link to={`/films/${episodeId}`} className="card film-card">
      <div className="film-title">
        <ImageComponent
          src={`films/${episodeId}.jpg`}
          alt={title + " poster"}
        />
        <h2>
          Episode {Episodes[episodeId]} : {title}
        </h2>
      </div>
      <h3> {release_date.substring(0, 4)}</h3>
    </Link>
  );
};

export default FilmCard;

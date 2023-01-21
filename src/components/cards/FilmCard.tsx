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
        <div className="card film-card">
            <div className="image-wrapper">
                <img
                    src={require(`../../assets/images/films/${props.episodeId}.jpg`)}
                    alt={props.title + " poster"}
                />
            </div>
            <h2>Episode {Episodes[props.episodeId]} : {props.title}</h2>
        </div>
    );
};

type filmCardProps = {
    title: string;
    episodeId: number;
};

export default FilmCard;

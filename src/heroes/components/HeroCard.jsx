import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    const charactesByHero = <p>{characters}</p>;

    return (
        <div className="col animate__animated animate__pulse">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4 ">
                        <img
                            src={heroImageUrl}
                            alt={superhero}
                            className="card-img"
                        />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {alter_ego !== characters && charactesByHero}

                            <p className="card-text">
                                <small className="textmuted">
                                    {first_appearance}
                                </small>
                            </p>

                            <Link
                                className="text-decoration-none"
                                to={`/hero/${id}`}
                            >
                                Más información
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

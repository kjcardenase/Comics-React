import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const showSearch = q.length === 0;

    const showError = q.length > 0 && heroes.length === 0;

    const { searchText, onInputChange } = useForm({
        searchText: q,
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        //if (searchText.trim().length <= 1) return;

        navigate(`?q=${searchText}`);
    };

    return (
        <>
            <h1>Búsqueda</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscando</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Búsqueda de heroé"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-outline-warning mt-1">
                            Consultar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

                    {/*q === '' ? (
                        <div className="alert alert-primary">Heroé...</div>
                    ) : (
                        heroes.length === 0 && (
                            <div className="alert alert-danger">
                                Heroé no encontrado <b>{q}</b>!
                            </div>
                        )
                        )*/}

                    <div
                        className="alert alert-primary animate__animated animate__shakeY"
                        style={{ display: showSearch ? '' : 'none' }}
                    >
                        Heroé...
                    </div>

                    <div
                        className="alert alert-danger animate__animated animate__wobble"
                        style={{ display: showError ? '' : 'none' }}
                    >
                        Heroé no encontrado <b>{q}</b>!
                    </div>

                    {heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </>
    );
};

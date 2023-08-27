import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchMovies } from "servicesApi/ApiMovies";
import { ContainerMovies } from "./Movie.styled";

const Movies = () => {
  const [data, setData] =useState(null);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const [query, setQuery] =useState(() => searchQuery || '');

  const location = useLocation();

  useEffect(() => {
    const getData = async () =>{
      try {
        setLoading(true);
        const { results } = await searchMovies(searchQuery);
        setData(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (searchQuery) {
      getData();
    }
  }, [searchQuery]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: query });
  };

  return (
    <>
      <ContainerMovies>
        <h2>Search movies</h2>
        <form onSubmit={ handleSubmit }>
          <input
            value={ query }
            onChange={ handleChange }
            name="search"
            type="text"
            placeholder="Movie search here"
          />
          <button type="submit">
            Search
          </button>
        </form>
      </ContainerMovies>
      <ul>
        { searchQuery ? (
          loading ? (
            "Loading..."
          ) : data.length > 0 ? (
            data.map(({ title, id }) => (
              <li key={ id }>
                <Link state={{ from: location }} to={ `/movies/${id}` } >
                  { title }
                </Link>
              </li>
            ))
          ) : (
            <p>No movies with this title were found. Try entering another title</p>
          )
        ) : (
          <p></p>
        )}
      </ul>
    </>
  );
};

export default Movies;

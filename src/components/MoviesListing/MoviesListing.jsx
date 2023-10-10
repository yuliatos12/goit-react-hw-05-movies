import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'


const MoviesListing = ({ films }) => {
    const location = useLocation();
    
    return <ul>
        {films.map(({ id, title }) =>
            <Link to={`/movies/${id}`} state={{ from: location }}>
                <li key={id}>
                        <h2>{title}</h2>  
                </li>
            </Link>
        )}
    </ul>
};

MoviesListing.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.node.isRequired,
        ).isRequired,
    ).isRequired,
};

export default MoviesListing;
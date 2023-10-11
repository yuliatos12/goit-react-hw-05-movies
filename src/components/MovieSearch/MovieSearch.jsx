import PropTypes from 'prop-types'
import css from "./MovieSearch.module.css"
const Searchbar = ({ onSubmit, value }) => (
    <div className={css.container}>
    <form onSubmit={onSubmit}>
        <input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            defaultValue={value}
        />
         <button>
            <span>Search</span>
        </button>
    </form>
    </div>
);

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
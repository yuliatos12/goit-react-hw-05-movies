import PropTypes from 'prop-types'

const Searchbar = ({ onSubmitSearchBar, value }) => (
    <header>
    <form onSubmit={onSubmitSearchBar}>
        <button>
            <span>Search</span>
        </button>

        <input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            defaultValue={value}
            placeholder="Search movies"
        />
    </form>
    </header>
);

Searchbar.propTypes = {
    onSubmitSearchBar: PropTypes.func.isRequired,
};

export default Searchbar;
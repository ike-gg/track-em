const SearchButton = ({ courier }) => {
  return (
    <button className="SearchEngine__button">
      Add it {courier.courier && `(${courier.courier.name})`}
    </button>
  );
};

export default SearchButton;

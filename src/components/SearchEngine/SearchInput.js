const SearchInput = ({ trackingInput, setTrackingInput }) => {
  const handleSearchTracking = (event) => {
    setTrackingInput(event.target.value);
  };
  return (
    <input
      placeholder="Insert here your tracking number."
      className="SearchEngine__input"
      value={trackingInput}
      onChange={handleSearchTracking}
    />
  );
};

export default SearchInput;

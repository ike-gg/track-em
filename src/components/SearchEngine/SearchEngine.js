import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

import "./SearchEngine.css";

import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const SearchEngine = () => {
  const [trackingInput, setTrackingInput] = useState("");
  const timeToDebounceTrackingCall = 300;
  // const [debounceTracking] = useDebounce(
  //   trackingInput,
  //   timeToDebounceTrackingCall
  // );

  // useEffect(() => {
  //   fetch(`https://api.tracktry.com/v1`, {});
  // }, [debounceTracking]);

  return (
    <section className="SearchEngine__container">
      <SearchInput
        trackingInput={trackingInput}
        setTrackingInput={setTrackingInput}
      />
      <SearchButton />
    </section>
  );
};

export default SearchEngine;

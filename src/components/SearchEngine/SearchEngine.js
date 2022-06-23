import { useState, useEffect } from "react";
// import { useDebounce } from "use-debounce";
import { getTracking } from "ts-tracking-number";

import "./SearchEngine.css";

import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const SearchEngine = () => {
  const [trackingInput, setTrackingInput] = useState("");
  const [predictCourier, setPredictCourier] = useState({});
  // const timeToDebounceTrackingCall = 300;
  // const [debounceTracking] = useDebounce(
  //   trackingInput,
  //   timeToDebounceTrackingCall
  // );

  useEffect(() => {
    const courier = getTracking(trackingInput);
    if (courier) {
      setPredictCourier(courier);
      console.log(courier);
    } else {
      setPredictCourier({});
    }
  }, [trackingInput]);

  return (
    <section className="SearchEngine__container">
      <main className="SearchEngine__main">
        <SearchInput
          trackingInput={trackingInput}
          setTrackingInput={setTrackingInput}
        />
        <SearchButton courier={predictCourier} />
      </main>
      {predictCourier.name && (
        <p className="SearchEngine__predictCourier">
          We detect that this is a{" "}
          <span className="SearchEngine__predictCourier--courier">
            {predictCourier.name}
          </span>{" "}
          parcel!
        </p>
      )}
    </section>
  );
};

export default SearchEngine;

import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "../styles/Filters.css";

function Filters({ setData }) {
  // ---------------hooks------------
  const [year, setYear] = React.useState(2015);
  const [launchStatus, setLaunchStatus] = React.useState(true);
  const [landingStatus, setLandingStatus] = React.useState(true);
  // const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
        const result = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchStatus}&land_success=${landingStatus}&launch_year=${year}`)
    setData(result.data)
    }
    fetchData()
  }, [year, launchStatus, landingStatus, setData]);

  // -----------------functions--------------
  const handleYearInput = (e) => {
    setYear(e.target.value);
  };
  const handleLaunchInput = (e) => {
    setLaunchStatus(e.target.value);
  };
  const handleLandingInput = (e) => {
    setLandingStatus(e.target.value);
  };

  //----------------------renderJSX-----------------------
  return (
    <div className="Filters">
      <h2>Filters</h2>
      <h3>Launch year - {year}</h3>
      <div className="years">
        <div className="">
          <button value={2013} onClick={handleYearInput}>
            2013
          </button>
          <button value={2014} onClick={handleYearInput}>
            2014
          </button>
        </div>
        <div className="">
          <button value={2015} onClick={handleYearInput}>
            2015
          </button>
          <button value={2016} onClick={handleYearInput}>
            2016
          </button>
        </div>
        <div className="">
          <button value={2017} onClick={handleYearInput}>
            2017
          </button>
          <button value={2018} onClick={handleYearInput}>
            2018
          </button>
        </div>
        <div className="">
          <button value={2019} onClick={handleYearInput}>
            2019
          </button>
          <button value={2020} onClick={handleYearInput}>
            2020
          </button>
        </div>
      </div>
      <div>
        <h3>Successful Launch - {launchStatus}</h3>
        <div className="launch">
          <button value={true} onClick={handleLaunchInput}>
            True
          </button>
          <button value={false} onClick={handleLaunchInput}>
            False
          </button>
        </div>
      </div>
      <div>
        <h3>Successful Landing - {landingStatus}</h3>
        <div className="launch">
          <button value={true} onClick={handleLandingInput}>
            True
          </button>
          <button value={false} onClick={handleLandingInput}>
            False
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;

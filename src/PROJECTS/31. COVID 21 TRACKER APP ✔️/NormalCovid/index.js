import React from "react";
import "./covid.css";
const CovidCard = () => {
  const [covidData, setcovidData] = React.useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualdata = await res.json();
      console.log(actualdata.statewise[0]);
      setcovidData(actualdata.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    getCovidData();
  }, []);
  const { active, confirmed, deaths, recovered, lastupdatedtime } = covidData;
  return (
    <>
      <h1>🔴 Live</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>

      <div className="row">
        <div className="column">
          <div className="card">
            <h3>
              <span>Our</span>Country
            </h3>
            <p>INDIA</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>
              <span>Total</span>Recovered
            </h3>
            <p>{recovered}</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>
              <span>Total</span>Confirmed
            </h3>
            <p>{confirmed}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <h3>
              <span>Total</span>Death
            </h3>
            <p>{deaths}</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h3>
              <span>Total</span>Active
            </h3>
            <p>{active}</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h3>
              <span>Last </span>Update
            </h3>
            <p>{lastupdatedtime}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CovidCard;

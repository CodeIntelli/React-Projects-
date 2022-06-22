import React from "react";

const Covid = () => {
  const [covidData, setcovidData] = React.useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualdata = await res.json();
      console.log(actualdata.statewise);
      setcovidData(actualdata.statewise);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1 className="text-center mt-3">INDIA COVID-19 DASHBOARD</h1>
      <div className="container">
        <table className="table mt-5 table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="text-uppercase" scope="col">
                State
              </th>
              <th className="text-uppercase" scope="col">
                Confirmed
              </th>
              <th className="text-uppercase" scope="col">
                Recorverd
              </th>
              <th className="text-uppercase" scope="col">
                Death
              </th>
              <th className="text-uppercase" scope="col">
                Active
              </th>
              <th className="text-uppercase" scope="col">
                Updated
              </th>
            </tr>
          </thead>
          <tbody>
            {covidData.map((elem, i) => {
              return (
                <>
                  <tr key={i}>
                    <th className="text-uppercase" scope="row">
                      {elem.state}
                    </th>
                    <td>{elem.confirmed}</td>
                    <td>{elem.recovered}</td>
                    <td>{elem.deaths}</td>
                    <td>{elem.active}</td>
                    <td>{elem.lastupdatedtime}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Covid;

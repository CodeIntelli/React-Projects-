import React from "react";
import Nav from "./components/Nav";
import MyCard from "./components/MyCard";
import { getMatches } from "./API/API";
const LiveCricket = () => {
  React.useEffect(() => {
    getMatches()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="poppins">
        <Nav />
        <h1 className="text-center">Live Cricket Score</h1>
        <MyCard />
      </div>
    </>
  );
};

export default LiveCricket;

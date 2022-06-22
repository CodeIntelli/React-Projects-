const API_KEY = "RH6OJOgTehaAtSTe026KQ652vjn2";

// get all matches [upcoming matches]
export const getMatches = () => {
  //   const url = `https://cricapi.com/api/matches/${API_KEY}`;
  const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR IS:" + error));
};

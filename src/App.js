import { useEffect } from "react";

// 97b837be

const API_URL = "http://www.omdapi.com?apikey=97b837be";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}$s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {}, []);

  return <h1>HEllo</h1>;
};

export default App;

// 50:30 Natapos!!!

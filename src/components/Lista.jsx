import React, { useEffect, useState } from "react";
import { getMovies } from "../api";

function Lista() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(data => setMovies(data.data));
  }, []);

  return (
    <div>
      {movies.map((elokuva) => (
        <div key={elokuva.id}>
          <p>
            Katsomasi elokuvan nimi: {elokuva.name} <br />
            Katsomispäivämäärä: {elokuva.watch_date} <br />
            Numeroarvio 1-10: {elokuva.rating}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Lista;

import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { searchMovies } from "../api";

function Haku() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const data = await searchMovies(query);
    setResults(data.data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <TextField
          id="query"
          label="Hae elokuvan nimellä"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Hae
        </Button>
      </form>
      <ul>
        {results.map((elokuva) => (
          <li key={elokuva.id}>
            {elokuva.name} - {elokuva.rating}/10 - Katsottu {elokuva.watch_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Haku;

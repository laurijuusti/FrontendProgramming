import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { addMovie } from "../api";

function Lomake() {
    const [elokuva, setElokuva] = useState('');
    const [pvm, setPvm] = useState('');
    const [arvio, setArvio] = useState('');
    const [viesti, setViesti] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await addMovie({ name: elokuva, rating: parseInt(arvio), watch_date: pvm });
        if (response.error) {
            setViesti('Elokuvan lisääminen epäonnistui');
        } else {
            setViesti('Elokuva lisätty onnistuneesti');
            setElokuva('');
            setPvm('');
            setArvio('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField
                id="elokuva"
                label="Elokuva"
                variant="outlined"
                value={elokuva}
                onChange={(e) => setElokuva(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                id="pvm"
                label="Katsomispäivämäärä"
                variant="outlined"
                value={pvm}
                onChange={(e) => setPvm(e.target.value)}
                fullWidth
                margin="normal"
                type="date"
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                id="arvio"
                label="Numeroarvio 1-10"
                type="number"
                variant="outlined"
                value={arvio}
                onChange={(e) => setArvio(e.target.value)}
                fullWidth
                margin="normal"
                inputProps={{ min: 1, max: 10 }}
            />
            
            <Button type="submit" variant="contained" color="primary">
                Lähetä
            </Button>
            {viesti && <p>{viesti}</p>}
        </Box>
    );
}

export default Lomake;

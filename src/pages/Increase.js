import React, { StrictMode } from "react";
import Button from '@mui/material/Button';

export default function Increase({fun}) {

    return (
        <Button type="button" onClick={() => { fun(); }} variant="contained">Increase</Button>
    )
}
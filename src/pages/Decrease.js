import React, { StrictMode } from "react";
import Button from '@mui/material/Button';

export default function Decrease({fun}) {
    return (
        <Button type="button" onClick={() => { fun(); }} variant="contained" color="error">Decrease</Button>
    )
}
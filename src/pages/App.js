import React, { Component }  from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function App() {
  const [labelText, setLabelText] = useState("");
  function Change(e) {
    setLabelText(e.target.value);
  }
  function Clear() {
    setLabelText("");
  }
  return (
    <>
      <Grid container spacing={1}>
        <form>
          <Grid item ms={12} class="label-container">
            <label for="text">{labelText}</label>
          </Grid>
          <Grid container sppacing={2}>
          <Grid item ms={5}>
            <TextField class='field' type="text" name="text" onChange={event => Change(event)} value={labelText} variant="outlined"/>
          </Grid>
          <Grid item ms={5}>
            <Button type="button" onClick={Clear} variant="contained">Clear</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
}
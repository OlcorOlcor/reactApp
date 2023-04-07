import { Outlet, Link } from "react-router-dom";
import React, { StrictMode } from "react";
import Grid from '@mui/material/Grid';
export default function Layout({count}) {
  
  return (
    <>
      <nav class='menu'>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Link to="/">SimpleApp</Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="/article">Article</Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="/increase">Increaser</Link>
          </Grid>
          <Grid item xs={3}>
            <Link to="/decrease">Decreaser</Link>
          </Grid>
          <Grid item xs={12} class='counter'>
            <p id="counter">Counter Value: {count}</p>
          </Grid>
        </Grid>
      </nav>

      <Outlet />
    </>
  )
};

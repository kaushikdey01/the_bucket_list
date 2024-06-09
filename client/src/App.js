import React from "react";
import { Container, AppBar, Typography, Grow, Grid} from '@mui/material'
import bucket from "./assets/images/bucket.jpg"

function App() {
  return (
    <Container maxWidth = "lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2"align="center">
          the bucket list 
        </Typography>
        <img src={bucket} alt="bucket_list_icon" height="60" /> 
      </AppBar>
    </Container>
  );
}



export default App;

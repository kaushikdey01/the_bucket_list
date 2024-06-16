import React from "react";
import { Container, AppBar, Typography, Grow, Grid} from '@mui/material'
import bucket from "./assets/images/bucket.jpg"
import Posts from "./components/Posts/Posts";
import Forms from "./components/Forms/Forms";


const App = () => {
  return (
    <Container maxWidth = "lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2"align="center">
          the bucket list 
        </Typography>
        <img src={bucket} alt="bucket_list_icon" height="60" width="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              {/* grid xs is for xtra small device where it takes the full width available  for itself. and sm for small and medium devices */}
                < Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* grid xs is for xtra small device where it takes the full width available  for itself. and sm for small and medium devices */}
                < Forms/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}



export default App;

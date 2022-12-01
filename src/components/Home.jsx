import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box sx={{ height: "70vh" }} mt={5}>
          <Grid container>
            <Grid sx={{ textAlign: "left" }} xs={12} pl={7}>
              <h1>Cписок городов</h1>
            </Grid>

            <Grid className="Cities" xs={12} pl={3}>
              <Link className="citiesLink" to={"Moscow"}>
                <div>Москва</div>
              </Link>
            </Grid>

            <Grid className="Cities" xs={12} pl={3}>
              <Link className="citiesLink" to={"SaintPetersburg"}>
                <div>Санкт-Петербург</div>
              </Link>
            </Grid>

            <Grid className="Cities" xs={12} pl={3}>
              <div>Новосибирск</div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;

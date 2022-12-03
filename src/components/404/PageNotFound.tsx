import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const PageNotFound = () => {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box alignContent="center" mt={5}>
          <Typography variant="h3" align="center">
            Страница не найдена
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
};

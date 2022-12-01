import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import moscowUniversities from "../../data/moscowUniversities";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Moscow = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid sx={{ textAlign: "left" }} xs={12} pl={7}>
          <h1>Вузы города Москвы</h1>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Вуз</TableCell>
              <TableCell align="center">КЦП</TableCell>
              <TableCell align="center">КЦП цел</TableCell>
              <TableCell align="center">ПМ</TableCell>
              <TableCell align="center">Абитуриентов</TableCell>
              <TableCell align="center">Бюджет</TableCell>
              <TableCell align="center">Платное</TableCell>
              <TableCell align="center">ОК</TableCell>
              <TableCell align="center">БВИ</TableCell>
              <TableCell align="center">Целевое</TableCell>
              <TableCell align="center">Квота</TableCell>
              <TableCell align="center">Спец. квота</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {moscowUniversities.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={row.slug} className="tableLink">
                    {row.title}
                  </Link>
                </TableCell>

                <TableCell align="center">{row.kcp}</TableCell>
                <TableCell align="center">{row.kcpTarget}</TableCell>
                <TableCell align="center">{row.pm}</TableCell>
                <TableCell align="center">{row.applicants}</TableCell>
                <TableCell align="center">{row.budget}</TableCell>
                <TableCell align="center">{row.paid}</TableCell>
                <TableCell align="center">{row.ok}</TableCell>
                <TableCell align="center">{row.bvi}</TableCell>
                <TableCell align="center">{row.target}</TableCell>
                <TableCell align="center">{row.quota}</TableCell>
                <TableCell align="center">{row.specialQuota}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default Moscow;

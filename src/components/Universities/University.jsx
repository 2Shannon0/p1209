import React from "react";
import { useParams } from "react-router-dom";
import moscowUniversities from "../../data/moscowUniversities";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";

const University = () => {
  const params = useParams();
  const university = moscowUniversities.find(
    (university) => university.slug === params.slug
  );
  return (
    <>
      <div>{university.title}</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Образовательная программа</TableCell>
              <TableCell align="center">КЦП (согл.)</TableCell>
              <TableCell align="center">Конкурс КЦП</TableCell>
              <TableCell align="center">ПМ</TableCell>
              <TableCell align="center">Заявл.</TableCell>
              <TableCell align="center">Людей</TableCell>
              <TableCell align="center">Бюджет</TableCell>
              <TableCell align="center">Платное</TableCell>
              <TableCell align="center">ОК</TableCell>
              <TableCell align="center">БВИ</TableCell>
              <TableCell align="center">Целевое</TableCell>
              <TableCell align="center">Квота</TableCell>
              <TableCell align="center">Спец. квота</TableCell>
              <TableCell align="center">Проходной балл (Б(ОК)/Плат)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {university.listOfEducationPrograms.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link to={row.slug} className="tableLink">
                    {row.educationalProgram}
                  </Link>
                </TableCell>

                <TableCell align="center">{row.kcpAgreements}</TableCell>
                <TableCell align="center">{row.competitionKcp}</TableCell>
                <TableCell align="center">{row.pm}</TableCell>
                <TableCell align="center">{row.applications}</TableCell>
                <TableCell align="center">{row.people}</TableCell>
                <TableCell align="center">{row.budget}</TableCell>
                <TableCell align="center">{row.paid}</TableCell>
                <TableCell align="center">{row.ok}</TableCell>
                <TableCell align="center">{row.bvi}</TableCell>
                <TableCell align="center">{row.target}</TableCell>
                <TableCell align="center">{row.quota}</TableCell>
                <TableCell align="center">{row.specialQuota}</TableCell>
                <TableCell align="center">{row.passingGrade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default University;

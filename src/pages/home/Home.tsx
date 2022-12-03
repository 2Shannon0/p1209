import React, { useCallback } from "react";
import { generatePath, useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

import { Table, TableRow } from "../../components/table";
import { useTransition } from "../../hooks/useTransition/useTransition";
import CityAPI from "../../api/CityAPI/CityAPI";
import { CircularProgress } from "../../components/progress";

const COLUMNS = [
  {
    title: "Город",
  },
  {
    title: "Вузов",
  },
  {
    title: "Количество абитуриентов",
  },
  {
    title: "Количество мест всего",
  },
];

const Home = () => {
  const [data, isLoading] = useTransition(() => CityAPI.getCitiesInfo());
  const cities = data?.data;
  const navigate = useNavigate();

  const clickHandler = useCallback(
    (id: string) => () => {
      navigate(
        generatePath(`/city/:year/:id`, {
          year: "2022",
          id: id,
        })
      );
    },
    []
  );
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box sx={{ height: "70vh" }} mt={5}>
          {isLoading ? (
            <CircularProgress />
          ) : cities && cities.length > 0 ? (
            <Table COLUMNS={COLUMNS} title="Список городов">
              {cities.map((el) => (
                <TableRow key={el.city_id} onClick={clickHandler(el.city_id)}>
                  <TableCell>
                    <Typography variant="body2" color="#1976D2">
                      {el.name}
                    </Typography>
                  </TableCell>
                  <TableCell>{el.university_number}</TableCell>
                  <TableCell>{el.abiturients_number}</TableCell>
                  <TableCell>{el.vacancies_number}</TableCell>
                </TableRow>
              ))}
            </Table>
          ) : (
            <p>Ничего не найдено</p>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;

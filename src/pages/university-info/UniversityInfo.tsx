import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TableCell from "@mui/material/TableCell";

import UniversityAPI from "../../api/UniversityAPI/UniversityAPI";
import { Table, TableRow } from "../../components/table";
import { useTransition } from "../../hooks/useTransition/useTransition";
import { CircularProgress } from "../../components/progress";
import { usePageParams } from "./UniversityInfo.hooks";
import { generatePath, useNavigate } from "react-router-dom";

const COLUMNS = [
  {
    title: "ОП",
  },
  {
    title: "КЦП",
  },
  {
    title: "Заявл.",
  },
  {
    title: "ПМ",
  },
  {
    title: "Абитуриентов",
  },
  {
    title: "Бюджет",
  },
  {
    title: "Комм.",
  },
  {
    title: "ОК",
  },
  {
    title: "БВИ",
  },
  {
    title: "Целевое",
  },
  {
    title: "Квота",
  },
  {
    title: "Спец.квота",
  },
];

const UniversityInfo = () => {
  const pageParams = usePageParams();

  const [data, isLoading] = useTransition(() =>
    UniversityAPI.getUniversityCommonInfo(pageParams)
  );
  const universities = data?.data;

  const navigate = useNavigate();
  const clickHandler = useCallback(
    (id: string) => () => {
      navigate(
        generatePath(`educational-program/${id}`, {
          id: id,
        })
      );
    },
    []
  );
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box sx={{ height: "70vh" }} mt={5}>
          {isLoading ? (
            <CircularProgress />
          ) : universities && universities.length > 0 ? (
            <Table COLUMNS={COLUMNS} title={data.university_name}>
              {universities.map((el) => (
                <TableRow
                  key={el.program_id}
                  onClick={clickHandler(el.program_id)}
                >
                  <TableCell>{el.name}</TableCell>
                  <TableCell>{el.kcp}</TableCell>
                  <TableCell>{el.applications}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>{el.abiturients_number}</TableCell>
                  <TableCell>{el.budget_places}</TableCell>
                  <TableCell>{el.commercial_places}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>{el.bvi}</TableCell>
                  <TableCell>{el.target_places}</TableCell>
                  <TableCell>{el.quota_places}</TableCell>
                  <TableCell>{el.special_quota_places}</TableCell>
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

export default UniversityInfo;

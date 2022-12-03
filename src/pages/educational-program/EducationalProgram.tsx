import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

import UniversityAPI from "../../api/UniversityAPI/UniversityAPI";
import { Checkbox } from "../../components/checkbox";
import { Table, TableRow } from "../../components/table";
import { useTransition } from "../../hooks/useTransition/useTransition";
import { CircularProgress } from "../../components/progress";
import { usePageParams } from "./EducationalProgram.hooks";

const COLUMNS = [
  {
    title: "Место",
  },
  {
    title: "СНИЛС",
  },
  {
    title: "П1",
  },
  {
    title: "П2",
  },
  {
    title: "П3",
  },
  {
    title: "Сумма",
  },
  {
    title: "Рассматриваемые ОП и ВУЗы",
  },
  {
    title: "Оригинал",
  },
];

const EducationalProgram = () => {
  const pageParams = usePageParams();

  const [data, isLoading] = useTransition(() =>
    UniversityAPI.getEducationalProgramInfo(pageParams)
  );
  const abiturientsList = data?.data;

  const columns = useMemo(() => {
    const temp = [...COLUMNS];
    data?.exams.forEach((exam, index) => {
      const item = temp.find((el) => el.title === `П${index + 1}`);
      if (item) {
        item.title = exam.name;
      }
    });
    return temp;
  }, [data]);

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box sx={{ height: "70vh" }} mt={5}>
          {isLoading ? (
            <CircularProgress />
          ) : abiturientsList && abiturientsList.length > 0 ? (
            <Table COLUMNS={columns}>
              {abiturientsList.map((el) => (
                <TableRow key={el.place}>
                  <TableCell>{el.place}</TableCell>
                  <TableCell>{el.snils}</TableCell>
                  <TableCell>{el.exam_scores[1]?.score}</TableCell>
                  <TableCell>{el.exam_scores[0]?.score}</TableCell>
                  <TableCell>{el.exam_scores[2]?.score}</TableCell>
                  <TableCell>{el.summ}</TableCell>
                  <TableCell>
                    {el.considerations.map((consideration) => (
                      <Typography variant="body2" key={consideration.title}>
                        {consideration.title}
                      </Typography>
                    ))}
                  </TableCell>
                  <TableCell>
                    <Checkbox value={el.is_original} onChange={() => {}} />
                  </TableCell>
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

export default EducationalProgram;

import React, { useCallback } from 'react';
import { generatePath, useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TableCell from '@mui/material/TableCell';

import { Table, TableRow } from '../../components/table';
import { useTransition } from '../../hooks/useTransition/useTransition';
import CityAPI from '../../api/CityAPI/CityAPI';
import { CircularProgress } from '../../components/progress';
import { usePageParams } from './City.hooks';

const COLUMNS = [
  {
    title: 'ВУЗ',
  },
  {
    title: 'КЦП',
  },
  {
    title: 'Заявлений',
  },
  {
    title: 'Абитуриентов',
  },
  {
    title: 'Бюджет',
  },
  {
    title: 'Комм.',
  },
  {
    title: 'Согласий',
  },
  {
    title: 'ОП',
  },
  {
    title: 'Целевое',
  },
  {
    title: 'БВИ',
  },
  {
    title: 'ОК',
  },
];

const City = () => {
  const pageParams = usePageParams();

  const [data, isLoading] = useTransition(() =>
    CityAPI.getCityInfo(pageParams)
  );
  const universities = data?.data;
  const navigate = useNavigate();

  const clickHandler = useCallback(
    (id: string) => () => {
      navigate(
        generatePath(`university-info/:id`, {
          id: id,
        })
      );
    },
    []
  );
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box sx={{ height: '70vh' }} mt={5}>
          {isLoading ? (
            <CircularProgress />
          ) : universities && universities.length > 0 ? (
            <Table COLUMNS={COLUMNS} title={data.title}>
              {universities.map((el) => (
                <TableRow
                  key={el.university_id}
                  onClick={clickHandler(el.university_id)}
                >
                  <TableCell>{el.name}</TableCell>
                  <TableCell>{el.kcp}</TableCell>
                  <TableCell>{el.applications}</TableCell>
                  <TableCell>{el.abiturients_number}</TableCell>
                  <TableCell>{el.budget_places}</TableCell>
                  <TableCell>{el.commercial_places}</TableCell>
                  <TableCell>{el.consents_number}</TableCell>
                  <TableCell>{el.op}</TableCell>
                  <TableCell>{el.target_places}</TableCell>
                  <TableCell>{el.bvi}</TableCell>
                  <TableCell>{el.ok}</TableCell>
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

export default City;

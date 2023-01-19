import React, { useCallback } from 'react';
import { generatePath, useNavigate } from 'react-router';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TableCell from '@mui/material/TableCell';

import UniversityAPI from '../../api/UniversityAPI/UniversityAPI';
import { Table, TableRow } from '../../components/table';
import { useTransition } from '../../hooks/useTransition/useTransition';
import { CircularProgress } from '../../components/progress';
import { usePageParams } from './UniversityInfo.hooks';

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

const UniversityInfo = () => {
  const pageParams = usePageParams();

  const [data, isLoading] = useTransition(() =>
    UniversityAPI.getUniversityCommonInfo(pageParams)
  );
  const eduPrograms = data?.data;

  const navigate = useNavigate();

  const clickHandler = useCallback(
    (id: string) => () => {
      navigate(
        generatePath(`edu-program-info/:id`, {
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
          ) : eduPrograms && eduPrograms.length > 0 ? (
            <Table COLUMNS={COLUMNS} title={data.university_name}>
              {eduPrograms.map((el) => (
                <TableRow key={el.program_id} onClick={clickHandler('PMI')}>
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

export default UniversityInfo;

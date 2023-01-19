import React from 'react';
import { usePageParams } from './EduProgramInfo.hooks';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TableCell from '@mui/material/TableCell';

import UniversityAPI from '../../api/UniversityAPI/UniversityAPI';
import { Table, TableRow } from '../../components/table';
import { useTransition } from '../../hooks/useTransition/useTransition';
import { CircularProgress } from '../../components/progress';
import EduProgramAPI from '../../api/EduProgramAPI/EduProgramAPI';

const COLUMNS = [
  {
    title: '№',
  },
  {
    title: 'СНИЛС',
  },
  {
    title: 'Сумма баллов',
  },
  {
    title: 'Сумма баллов без ИД',
  },
  {
    title: 'Инф',
  },
  {
    title: 'Мат',
  },
  {
    title: 'Рус',
  },
  {
    title: 'ИД',
  },
  {
    title: 'ПП',
  },
  {
    title: 'Ориг.',
  },
  {
    title: 'Согл.',
  },
];
const EduProgramInfo = () => {
  const pageParams = usePageParams();

  const [data, isLoading] = useTransition(() =>
    EduProgramAPI.getEduProgramInfo()
  );
  const abiturients = data?.data;

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box sx={{ height: '70vh' }} mt={5}>
          {isLoading ? (
            <CircularProgress />
          ) : abiturients && abiturients.length > 0 ? (
            <Table COLUMNS={COLUMNS} title={data.eduProgram_name}>
              {abiturients.map((el) => (
                <TableRow key={el.abiturient_id}>
                  <TableCell>{'1'}</TableCell>
                  {/* <TableCell>{el.kcp}</TableCell> */}
                  <TableCell>{el.abiturient_snils}</TableCell>
                  <TableCell>{el.summa_ballov}</TableCell>
                  <TableCell>{el.summa_ballov_bez_ind_dos}</TableCell>
                  <TableCell>{el.ikt}</TableCell>
                  <TableCell>{el.math}</TableCell>
                  <TableCell>{el.rus}</TableCell>
                  <TableCell>{el.ind_dos}</TableCell>
                  <TableCell>{el.preimush_pravo}</TableCell>
                  <TableCell>{el.original}</TableCell>
                  <TableCell>{el.soglasie}</TableCell>
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

export default EduProgramInfo;

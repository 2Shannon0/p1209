import React from 'react';

import TableMUI from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface Props {
  title?: React.ReactNode;
  COLUMNS?: {
    title: string;
  }[];
}
export const Table: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  title,
  COLUMNS,
}) => {
  return (
    <>
      {title && (
        <Typography variant="h6" sx={{ fontWeight: 'Bold' }}>
          {title}
        </Typography>
      )}
      <TableContainer component={Paper}>
        <TableMUI sx={{ minWidth: 650 }} aria-label="simple table">
          {COLUMNS && (
            <TableHead>
              <TableRow>
                {COLUMNS.map((el, index) => (
                  <TableCell sx={{ fontWeight: 'Bold' }} key={index}>
                    <Typography variant="body2" sx={{color: '#606060', fontSize: 15}}>
                      {el.title}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          )}
          <TableBody>{children}</TableBody>
        </TableMUI>
      </TableContainer>
    </>
  );
};

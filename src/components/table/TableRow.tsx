import React from "react";

import TableRowMUI from "@mui/material/TableRow";

interface Props {
  onClick?: VoidFunction;
}

export const TableRow: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  onClick,
}) => {
  return (
    <TableRowMUI hover={!!onClick} onClick={onClick}>
      {children}
    </TableRowMUI>
  );
};

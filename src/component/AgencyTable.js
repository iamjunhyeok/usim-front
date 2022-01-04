import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function AgencyTable() {
  const Row = (props) => {
    return (
      <>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell component="th" scope="row" align="center">
            {props.name}
          </TableCell>
          <TableCell align="center">{props.calories}</TableCell>
          <TableCell align="center">{props.fat}</TableCell>
          <TableCell align="center">{props.carbs}</TableCell>
          <TableCell align="center">{props.protein}</TableCell>
          <TableCell align="center">{props.protein}</TableCell>
          <TableCell align="center">{props.protein}</TableCell>
          <TableCell align="center">{props.protein}</TableCell>
        </TableRow>
      </>
    );
  };
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">대리점 코드</TableCell>
              <TableCell align="center">대리점 명</TableCell>
              <TableCell align="center">대리점 타입</TableCell>
              <TableCell align="center">예치금 잔액</TableCell>
              <TableCell align="center">서비스 번호</TableCell>
              <TableCell align="center">가상 계좌</TableCell>
              <TableCell align="center">이메일</TableCell>
              <TableCell align="center">대표</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Row calories="4" />
            <Row calories="5" />
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Stack direction="row" justifyContent="center">
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
}

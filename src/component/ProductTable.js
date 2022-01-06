import React, { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Avatar from "@mui/material/Avatar";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";

export default function ProductTable() {
  const [items, setItems] = useState([
    {
      email: "jeonjhyeok@boomers.co.kr",
      agencyName: "부머스",
      createDate: "2022-01-04 17:49:00",
    },
  ]);
  useEffect(() => {
    // setItems(null);
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>이메일</TableCell>
            <TableCell>대리점</TableCell>
            <TableCell align="center">생성일</TableCell>
            <TableCell align="center">추가 기능</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar alt="Remy Sharp" />
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.agencyName}</TableCell>
              <TableCell align="center">{item.createDate}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <SettingsIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

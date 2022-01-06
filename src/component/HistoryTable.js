import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import TableFooter from "@mui/material/TableFooter";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import axios from "axios";

const Row = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {props.CREATE_DATE}
        </TableCell>
        <TableCell align="center">{props.CREATE_MEMBER_ID}</TableCell>
        <TableCell align="center">{props.TYPE}</TableCell>
        <TableCell align="center">{props.USIM_BAR_CODE}</TableCell>
        <TableCell align="center">{props.PHONE_NUMBER}</TableCell>
        <TableCell align="center">{props.PRODUCT_ID}</TableCell>
        <TableCell align="center">{props.ID}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">날짜</TableCell>
                    <TableCell align="center">대리점</TableCell>
                    <TableCell align="center">구분</TableCell>
                    <TableCell align="center">바코드 번호</TableCell>
                    <TableCell align="center">서비스 번호</TableCell>
                    <TableCell align="center">상품</TableCell>
                    <TableCell align="center">상태</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">111</TableCell>
                    <TableCell align="center">222</TableCell>
                    <TableCell align="center">333</TableCell>
                    <TableCell align="center">444</TableCell>
                    <TableCell align="center">555</TableCell>
                    <TableCell align="center">666</TableCell>
                    <TableCell align="center">777</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default function HistoryTable() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(null);
  useEffect(() => {
    axios
      .get("http://192.168.0.52:8080/openings", {
        params: {
          page: page,
        },
      })
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const [count, setCount] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  if (!items) return <div>이력 로딩중 ...</div>;

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">날짜</TableCell>
              <TableCell align="center">대리점</TableCell>
              <TableCell align="center">구분</TableCell>
              <TableCell align="center">바코드 번호</TableCell>
              <TableCell align="center">서비스 번호</TableCell>
              <TableCell align="center">상품</TableCell>
              <TableCell align="center">상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <Row {...item} />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell align="center" colSpan="8">
                abcdef
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <br />
      <Stack direction="row" justifyContent="center">
        <Pagination count={3} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
}

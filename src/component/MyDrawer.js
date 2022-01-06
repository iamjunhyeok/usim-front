import React, { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-router-dom";

export default function MyDrawer({ open, toggleDrawer }) {
  return (
    <Drawer open={open} onClose={toggleDrawer}>
      <Box
        sx={{
          width: 250,
        }}
        role="presentation"
        onClick={toggleDrawer}
      >
        <List>
          {[
            "예치금 내역",
            "대리점 개통 및 충전 현황",
            "유심 리스트",
            "입금 내역",
            "대리점/직원 목록",
            "대리점/직원 등록",
            "딜러 등록",
            "회원 관리",
            "상품 관리",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}

          <Link to="/opening">
            <ListItem button key="1">
              <ListItemText>개통 및 충전 처리</ListItemText>
            </ListItem>
          </Link>
          <Link to="/history">
            <ListItem button key="2">
              <ListItemText>개통 및 충전 내역</ListItemText>
            </ListItem>
          </Link>

          <Link to="/product">
            <ListItem button key="3">
              <ListItemText>상품 관리</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
}

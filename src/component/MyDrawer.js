import React, { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import CustomLink from "./CustomLink";

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
          <CustomLink to="/opening">
            <ListItem button key="1">
              <ListItemText>개통/충전 신청</ListItemText>
            </ListItem>
          </CustomLink>

          <CustomLink to="/history">
            <ListItem button key="2">
              <ListItemText>개통/충전 내역</ListItemText>
            </ListItem>
          </CustomLink>

          <CustomLink to="/product">
            <ListItem button key="3">
              <ListItemText>상품 관리</ListItemText>
            </ListItem>
          </CustomLink>
        </List>
      </Box>
    </Drawer>
  );
}

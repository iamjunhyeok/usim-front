import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import MyDrawer from "./MyDrawer";

export default function MyAppBar() {
  const [auth, setAuth] = useState(false);

  const handleMenu = (event) => {};

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            825SIM
          </Typography>
          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button color="inherit">Login</Button>
            </Link>
          )}
          <MyDrawer open={open} toggleDrawer={toggleDrawer} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

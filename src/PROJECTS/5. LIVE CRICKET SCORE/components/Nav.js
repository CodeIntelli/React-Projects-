import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const Nav = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Live Score</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;

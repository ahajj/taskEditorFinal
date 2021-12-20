import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import logo from './logo.svg';
import { Link as RouterLink } from "react-router-dom";
import {Button} from "@mui/material";

export default function Header() {

  const toolBar = () => {
	return <Toolbar >
	  <img src={logo} className="App-logo" alt="logo" />
      <Button
        key="homePage"
        color="inherit"
        to='/'
        component={RouterLink}
      >
      Home Page
      </Button>
    </Toolbar>
  }

  return (
    <header>
	  <AppBar className="App-header">{toolBar()}</AppBar>
	</header>
  );

}
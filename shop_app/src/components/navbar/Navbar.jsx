import React from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../../assets/shop.jpg";
import useStyles from "./navbarStyles";

const Navbar = () => {
  const styles = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={styles.AppBar} color="inherit">
        <Toolbar>
          <Typography variant="h5" className={styles.title} color="inherit">
            {" "}
            <img
              src={logo}
              alt=" E-Shopping Platform"
              height={"65px"}
              className={styles.image}
            />
            E-Shopping Platform
          </Typography>
          <div className={styles.grow} />
          <div className={styles.button}>
            <IconButton aria-label="show cart item" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartIcon />{" "}
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

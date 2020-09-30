import React from "react"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import MenuIcon from "@material-ui/icons/Menu"
import InfoIcon from "@material-ui/icons/Info"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/IconButton"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import styles from "./header.module.css"
import LogoImage from "../../../static/images/logoNoText.png"

export default function Header({ children }) {
  const [toggle, setToggle] = React.useState(false)

  const toggleDrawer = () => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "tab" || event.key === "Shift")
    ) {
      return
    }
    setToggle(!toggle)
  }
  return (
    <>
      <AppBar position="static" color="inherit">
        <Toolbar color="inherit">
          <img src={LogoImage} alt="Alex Lentz art logo--a Monstera leaf" />
          <div className={styles.grow} />
          <IconButton
            className={styles.hamburger}
            edge="end"
            color="white"
            aria-label="menu"
            onClick={toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor="right"
            open={toggle}
            onClose={toggleDrawer()}
            onOpen={toggleDrawer()}
          >
            <div className={styles.listContainer}>
              <List className={styles.list}>
                <ListItem button key="About">
                  <ListItemIcon className={styles.menuIcon}>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="About Me" />
                </ListItem>
              </List>
            </div>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}

import React from "react"
import { Link } from "gatsby"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import AppsIcon from "@material-ui/icons/Apps"
import InfoIcon from "@material-ui/icons/Info"
import HomeIcon from "@material-ui/icons/Home"
import InstagramIcon from "@material-ui/icons/Instagram"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/IconButton"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import styles from "./header.module.css"
import LogoImage from "../../../static/images/logoNoText.png"

const useStyles = makeStyles({
  instagramIconContainer: {
    marginTop: "auto",
  },
})
export default function Header({ children }) {
  const [toggle, setToggle] = React.useState(false)
  const classes = useStyles()

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
          <Link className={styles.menuLink} to={`/`}>
            <img
              className={styles.logo}
              src={LogoImage}
              alt="Alex Lentz art logo--a Monstera leaf"
            />
          </Link>
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
                <ListItem component={Link} to={"/"} button key="Home">
                  <ListItemIcon className={styles.menuIcon}>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem component={Link} to={"/about/"} button key="About">
                  <ListItemIcon className={styles.menuIcon}>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="About Me" />
                </ListItem>
                <ListItem component={Link} to={"/gallery"} button key="Gallery">
                  <ListItemIcon className={styles.menuIcon}>
                    <AppsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Gallery" />
                </ListItem>
                <ListItem
                  component={Link}
                  className={classes.instagramIconContainer}
                  href={"https://www.instagram.com/lentzar_art/?hl=en"}
                  button
                  key="Gallery"
                >
                  <ListItemIcon className={styles.instagramIcon}>
                    <InstagramIcon className={styles.instagramIcon} />
                  </ListItemIcon>
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

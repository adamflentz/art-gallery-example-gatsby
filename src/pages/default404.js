import React from "react"
import Palette from "../components/palette/palette.js"
import Header from "../components/header/header.js"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    border: 0,
    margin: "0",
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
  },
  number: {
    display: "inline-block",
    marginRight: "15px",
    margin: "0",
    color: "white",
  },
  vertBar: {
    display: "inline-block",
    margin: "0",
    marginRight: "15px",
    lineHeight: "49px",
    color: "grey",
  },
  message: {
    display: "inline-block",
    margin: "0",
    color: "white",
  },
})

export default function PageNotFound() {
  const classes = useStyles()
  return (
    <Palette>
      <Header>
        <div className={classes.root}>
          <div className={classes.number}>
            <h1>404</h1>
          </div>
          <div className={classes.vertBar}>
            <h1>|</h1>
          </div>
          <div className={classes.message}>
            <h2>This page could not be found.</h2>
          </div>
        </div>
      </Header>
    </Palette>
  )
}

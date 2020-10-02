import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import GalleryPage from "../components/gallery/gallery.js"
import Palette from "../components/palette/palette.js"
import Logo from "../../static/images/logo.png"
import "fontsource-roboto/100.css"
import { makeStyles } from "@material-ui/core/styles"
import { Autorenew } from "@material-ui/icons"

const useStyles = makeStyles({
  logo: {
    width: "10vw",
    height: "auto",
  },
  logoLink: {
    margin: "auto",
  },
  body: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "100vh",
    backgroundImage: "url('../images/splashBase.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
})

const HomePage = ({ data }) => {
  const classes = useStyles()
  return (
    <Palette>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alex Lentz Art</title>
      </Helmet>
      <div className={classes.body}>
        <Link className={classes.logoLink} to={`/gallery/`}>
          <img className={classes.logo} src={Logo} alt="logo" />
        </Link>
      </div>
    </Palette>
  )
}
export default HomePage

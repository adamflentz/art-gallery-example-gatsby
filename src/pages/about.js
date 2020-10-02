import React from "react"
import Helmet from "react-helmet"
import Palette from "../components/palette/palette.js"
import Header from "../components/header/header.js"

export default function About() {
  return (
    <Palette>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <Header></Header>
    </Palette>
  )
}

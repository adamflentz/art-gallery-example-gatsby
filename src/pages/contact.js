import React from "react"
import Helmet from "react-helmet"
import Palette from "../components/palette/palette.js"
import Header from "../components/header/header.js"

export default function Contact() {
  return (
    <Palette>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Me</title>
      </Helmet>
      <Header></Header>
    </Palette>
  )
}

import React from "react"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"

export default function Palette({ children }) {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  })
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
}

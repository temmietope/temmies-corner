import React, { useEffect, useState } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme, {lightTheme, darkTheme} from "./themes/theme"
import { useDarkMode } from "./utils/useDarkMode"
import { DarkModeToggler } from "react-darkmode-toggler"

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body,html {
        font-family: ${props => props.theme.fonts.main};
        /* height: 100%; */
        background-color: ${props => props.theme.colors.light1};
        scroll-behavior: smooth;
  @media ${props => props.theme.breakpoints.mobile} {
        .no-scroll{
          overflow: hidden;
        }
      }
    }
`

const [isDark, setIsDark] = useState("light")

// Dark mode button toggler
const darkModeHandler = () => {
  setIsDark(isDark === "light" ? "dark" : "light")
}

// // const [theme, toggleTheme, componentMounted] = useDarkMode()
// useEffect(() => {
// //   if (!componentMounted) {
//     return <div />
// //   }
//   // eslint-disable-next-line
// }, [])

const Layout = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  )
}

export default Layout

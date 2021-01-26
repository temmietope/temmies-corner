import React, { useRef, useEffect } from "react"
import { ContainerWrapper, ContainerDiv } from "../elements"
import { Footer } from "./Footer"
import { Nav } from "./Nav"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme, { darkTheme, lightTheme } from "../themes/theme"
import { useDarkMode } from "../utils/useDarkMode"

export const Container = ({ children }) => {
  const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body,html {
        font-family: ${props => props.theme.fonts.main};
        /* height: 100%; */
        background-color: ${props => props.theme.body};
        scroll-behavior: smooth;
  @media ${props => props.theme.breakpoints.mobile} {
        .no-scroll{
          overflow: hidden;
        }
      }
    }
`
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  // useEffect(() => {
  //   if (!componentMounted) {
  //     return <div />
  //   }
  //   // eslint-disable-next-line
  // }, [])
  const footer = useRef(null)
  const scrollToRef = ref => {
    let div = (0, ref.current.offsetTop)
    window.scrollTo({ top: div, behavior: "smooth" })
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ContainerWrapper>
        <Nav
          scrollToRef={() => scrollToRef(footer)}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <ContainerDiv>{children}</ContainerDiv>
        <span ref={footer} style={{ width: "100%" }}>
          <Footer />
        </span>
      </ContainerWrapper>
    </ThemeProvider>
  )
}

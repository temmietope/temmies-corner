import React from "react"
import { ContainerWrapper, ContainerDiv } from "../elements"
import { Footer } from "./Footer"
import { Nav } from "./Nav"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      <ContainerDiv>{children}</ContainerDiv>
      <Footer />
    </ContainerWrapper>
  )
}

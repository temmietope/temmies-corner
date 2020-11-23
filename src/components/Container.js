import React from "react"
import { ContainerWrapper } from "../elements"
import { Footer } from "./Footer"
import { Nav } from "./Nav"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}

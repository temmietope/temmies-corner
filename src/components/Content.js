import React from "react"
import { ContentWrapper } from "../elements"

export const Content = ({ children, page  }) => {
  return <ContentWrapper page={page}>{children}</ContentWrapper>
}

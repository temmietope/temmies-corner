import React from "react"
import { PageHeader, H1 } from "../elements"

export const PageHead = ({ children, page }) => {
  return (
    <PageHeader page={page}>
      <H1>{children}</H1>
    </PageHeader>
  )
}

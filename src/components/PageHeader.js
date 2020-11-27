import React from 'react'
import { PageHeader } from '../elements'

export const PageHead = ({ children, page }) => {
  return <PageHeader page={page}><h2>{children}</h2></PageHeader>
}

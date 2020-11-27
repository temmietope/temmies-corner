import React from "react"
import { CardWrapper, H2, P } from "../elements"
import Button from "./Button"


export const ContentCard = ({ date, title, excerpt, slug, page, tags }) => {
  console.log(tags)
  return (
    <CardWrapper to={slug} page={page}>
      {/* <P size="xSmall" textAlign="center" margin="0 0 0.5rem 0">
        {date}
      </P>
      <H2 textAlign="center" margin="0 0 1rem 0">
        {title}
      </H2>
      <P size="small" color="dark2" textAlign="center" margin="0 0 1.5rem 0">
        {excerpt}
      </P>
      <Button href={slug}>Read More</Button> */}
      <h2>{title}</h2>
      <small><span>{tags}</span> <span>{date}</span></small>

      <p className="excerpt">{excerpt}</p>
      {/* <Button href={slug}>Read More</Button> */}
    </CardWrapper>
  )
}

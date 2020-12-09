import React from "react"
import { CardWrapper, Date, H2, P, Tags, TagsAndDate } from "../elements"
import Button from "./Button"


export const ContentCard = ({ date, title, excerpt, slug, page, tags }) => {
  console.log(tags)
  const tagsArray = tags && tags.split(",")

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
      <TagsAndDate>
        <Tags page="home">
          {tagsArray ? tagsArray.map((tag, index) => {
            return (
              <p className={tag} key={index}>
                {tag}
              </p>
            )
          }): ''}
        </Tags>
        <Date>{date}</Date>
      </TagsAndDate>
      {/* <small>
        <span>{tags}</span> <span>{date}</span>
      </small> */}

      <p className="excerpt">{excerpt}</p>
      {/* <Button href={slug}>Read More</Button> */}
    </CardWrapper>
  )
}

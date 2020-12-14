import React from "react"
import { CardWrapper, Date, H2, P, Tags, TagsAndDate } from "../elements"
import Button from "./Button"

export const ContentCard = ({ date, title, excerpt, slug, page, tags }) => {
  console.log(tags)
  const tagsArray = tags && tags.split(",")

  return (
    <CardWrapper to={slug} page={page}>
      <h2>{title}</h2>
      <TagsAndDate>
        <Tags page="home">
          {tagsArray
            ? tagsArray.map((tag, index) => {
                return (
                  <p className={tag} key={index}>
                    {tag}
                  </p>
                )
              })
            : ""}
        </Tags>
        <Date>{date}</Date>
      </TagsAndDate>

      <p className="excerpt">{excerpt}</p>
    </CardWrapper>
  )
}

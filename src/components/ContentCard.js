import React from "react"
import { CardWrapper, Date, H2, P, Tags, TagsAndDate } from "../elements"
import Button from "./Button"
import StackLang from "./StackTag"

export const ContentCard = ({ date, title, excerpt, slug, page, tags }) => {
  const tagsArray = tags && tags.split(", ")

  return (
    <CardWrapper to={slug} page={page}>
      <h2>{title}</h2>
      <TagsAndDate>
        <Tags page="home">
          {tagsArray
            ? tagsArray.map((tag, index) => {
                return <StackLang lang={tag} key={index} />
              })
            : ""}
        </Tags>
        <Date>{date}</Date>
      </TagsAndDate>

      <p className="excerpt">{excerpt}</p>
    </CardWrapper>
  )
}

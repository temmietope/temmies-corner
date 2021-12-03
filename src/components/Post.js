import React from "react"
import { PostContainer, PostWrapper } from "../elements"

export const Post = ({ children }) => {
  return (
    <PostWrapper>
      <PostContainer>{children}</PostContainer>
    </PostWrapper>
  )
}

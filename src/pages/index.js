import React from "react"
import { Container, Content, ContentCard, FeatureImage } from "../components"

const IndexPage = () => {
  return <Container>
    <FeatureImage/>
    <Content>
      <ContentCard date='Nov 22, 2020' title='SOme awkward post' excerpt='I have no idea of what i did' slug='/hehhe'/>
    </Content>
  </Container>
}

export default IndexPage

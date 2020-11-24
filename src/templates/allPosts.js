import React from "react"
import { graphql } from "gatsby"
import { FeatureImage, Content, Container, ContentCard } from "../components"
import { H1, P } from "../elements"
import Pagination from "../components/Pagination"

export default function allPosts({ pageContext, data }) {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `${currentPage - 1}`
  const nextPage = `${currentPage + 1}`
  const posts = data.allMdx.edges
  return (
    <Container>
      <FeatureImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Elot rhoncus change
        </H1>
        <P color="dark2" textAlign="center">
          some more paragraph nonsense
        </P>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Content>
    </Container>
  )
}

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            excerpt
          }
        }
      }
    }
  }
`

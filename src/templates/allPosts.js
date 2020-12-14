import React from "react"
import { graphql, Link } from "gatsby"
import {
  FeatureImage,
  Content,
  Container,
  ContentCard,
  Seo,
  PageHead,
} from "../components"
import { H1, P } from "../elements"
import Pagination from "../components/Pagination"
import Header from "../components/Header"

export default function allPosts({ pageContext, data }) {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`
  const posts = data.allMdx.edges
  return (
    <Container>
      <Seo />
      {/* <FeatureImage />
      <Header /> */}
      <Content page="allPosts">
        <PageHead>Temmie's Corner</PageHead>
        <div className="posts">
          {posts.map(post => (
            <ContentCard
              page="allPosts"
              key={post.node.frontmatter.slug}
              date={post.node.frontmatter.date}
              title={post.node.frontmatter.title}
              excerpt={post.node.frontmatter.excerpt}
              tags={post.node.frontmatter.tags}
              slug={
                isFirst
                  ? post.node.frontmatter.slug
                  : `/blog/${post.node.frontmatter.slug}`
              }
            />
          ))}
        </div>

        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          numPages={numPages}
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
            tags
          }
        }
      }
    }
  }
`

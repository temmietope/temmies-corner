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
import Button from "../components/Button"

export default function Home({ pageContext, data }) {
  //   const { currentPage, numPages } = pageContext
  //   const isFirst = currentPage === 1
  //   const isLast = currentPage === numPages
  //   const prevPage = currentPage - 1 === 1 ? '/' : `${currentPage - 1}`
  //   const nextPage = `${currentPage + 1}`
  const posts = data.allMdx.edges
  return (
    <Container>
      <Seo />
      {/* <Header /> */}
      <Content page="home">
        {/* <H1 textAlign="center" margin="0 0 1rem 0">
          Latest Posts
        </H1> */}
        <PageHead page="home">Latest Posts</PageHead>

        <div className="view-all">
          <Link to="blog">
            <button to="/blog">All Posts</button>
          </Link>
        </div>
        <div className="posts">
          {posts.map(post => (
            <ContentCard
              page="homePage"
              key={post.node.frontmatter.slug}
              date={post.node.frontmatter.date}
              title={post.node.frontmatter.title}
              excerpt={post.node.frontmatter.excerpt}
              slug={`blog/${post.node.frontmatter.slug}`}
            />
          ))}
        </div>
      </Content>
    </Container>
  )
}

export const pageQuery = graphql`
  query RecentPostsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
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

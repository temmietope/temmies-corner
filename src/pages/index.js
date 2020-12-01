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
import Contact from "../components/Contact"
import Stack from "../components/Stack"

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
      <Header />
      {/* <FeatureImage/> */}
      <Content page="home">
        <div className="home__content-header">
          <h3>Recent Posts</h3>
          <Link to="/blog" className="view-all">
            All Posts
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
              tags={post.node.frontmatter.tags}
            />
          ))}
        </div>
      </Content>
      <Stack />
      <Contact />
    </Container>
  )
}

export const pageQuery = graphql`
  query RecentPostsQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 4) {
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

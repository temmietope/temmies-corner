import React from "react"
import { graphql, Link } from "gatsby"
import { Content, Container, ContentCard, Seo } from "../components"
import { P, H3 } from "../elements"
import Header from "../components/Header"
import Contact from "../components/Contact"
import Stack from "../components/Stack"

export default function Home({ data, location }) {
  const posts = data.allMdx.edges
  return (
    <Container>
      <Seo pathname={location.pathname} title="Home" />
      <Header />
      <Content page="home">
        <div className="home__content-header">
          <H3>Recent Posts</H3>
          <Link to="/blog" className="view-all">
            <P>All Posts</P>
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
            date(formatString: "Do MMMM, YYYY")
            excerpt
            tags
          }
        }
      }
    }
  }
`

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
        {/* <H1 textAlign="center" margin="0 0 1rem 0">
          My posts will be here
        </H1> */}
        <PageHead>Blog</PageHead>
        <div className="posts">
          {posts.map(post => (
            <ContentCard
              page="allPosts"
              key={post.node.frontmatter.slug}
              date={post.node.frontmatter.date}
              title={post.node.frontmatter.title}
              excerpt={post.node.frontmatter.excerpt}
              slug={
                isFirst
                  ? post.node.frontmatter.slug
                  : `/blog/${post.node.frontmatter.slug}`
              }
            />
          ))}
        </div>

        {/* <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        /> */}

        <div>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              listStyle: "none",
              padding: 0,
            }}
          >
            {!isFirst && (
              <Link
                to={prevPage}
                rel="prev"
                style={{
                  marginTop: "0.1rem",
                  marginBottom: "0.1rem",
                  padding: "0.5rem",
                  color: "var(--themeColor)",
                }}
              >
                {"<< Prev"}
              </Link>
            )}
            {Array.from({ length: numPages }, (_, i) => (
              <li
                key={`pagination-number${i + 1}`}
                style={{
                  margin: 0,
                }}
              >
                <Link
                  to={`/blog/${i === 0 ? "" : i + 1}`}
                  style={{
                    marginTop: "0.1rem",
                    marginBottom: "0.1rem",
                    padding: "0.5rem",
                    textDecoration: "none",
                    color:
                      i + 1 === currentPage ? "#ffffff" : "var(--themeColor)",
                    background:
                      i + 1 === currentPage ? "var(--themeColor)" : "",
                  }}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
            {!isLast && (
              <Link
                to={nextPage}
                rel="next"
                style={{
                  marginTop: "0.1rem",
                  marginBottom: "0.1rem",
                  padding: "0.5rem",
                  color: "var(--themeColor)",
                }}
              >
                {"Next >>"}
              </Link>
            )}
          </ul>
        </div>
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

import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1, Tags } from "../elements"
import { Container, FeatureImage, Post, Seo } from "../components"

export default function singlePost({ data, pageContext }) {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed
  const seoImage = data.mdx.frontmatter.featureImage.publicURL
  const { previous, next } = pageContext
  console.log(data)
  const tagsArray = data.mdx.frontmatter.tags.split(",")
  return (
    <Container>
      <Seo
        title={data.mdx.frontmatter.title}
        image={seoImage}
        description={data.mdx.frontmatter.excerpt}
      />
      <FeatureImage fixed={featureImage} />
      <Post>
        <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
        <Tags>
          {tagsArray.map((tag, index) => {
            return (
              <p className={tag} key={index}>
                {tag}
              </p>
            )
          })}
        </Tags>

        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={`/blog/${previous.frontmatter.slug}`} rel="prev">
              {"<<" + previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`/blog/${next.frontmatter.slug}`} rel="next">
              {next.frontmatter.title + ">>"}
            </Link>
          )}
        </li>
      </ul>
    </Container>
  )
}

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
        tags
        featureImage {
          publicURL
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

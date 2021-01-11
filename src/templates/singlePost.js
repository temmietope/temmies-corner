import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  AuthorLink,
  Date,
  H1,
  P,
  PaginationElement,
  PaginationWrapper,
  Tags,
  TagsAndDate,
} from "../elements"
import { Container, FeatureImage, Post, Seo } from "../components"
import ImageLoad from "../utils/ImageLoader"
import StackLang from "../components/StackTag"

export default function singlePost({ data, pageContext }) {
  // const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed
  const seoImage = data.mdx.frontmatter.featureImage.publicURL
  const { previous, next } = pageContext
  const tagsArray = data.mdx.frontmatter.tags.split(", ")
  console.log(tagsArray)
  const minRead = data.mdx.timeToRead
  return (
    <Container>
      <Seo
        title={data.mdx.frontmatter.title}
        image={seoImage}
        description={data.mdx.frontmatter.excerpt}
      />
      {/* <FeatureImage fixed={featureImage} /> */}
      <Post>
        <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
        <AuthorLink>
          <Link to="/" className="link">
            <ImageLoad
              src={require("../images/avatar.jpg")}
              // placeholder={require('../../src/assets/images/blur.png')}
              alt="Decription"
            />
            <P>Temitope</P>
          </Link>
          <P>{data.mdx.frontmatter.date}</P>
          <P>
            {minRead} {minRead === 1 ? "minute" : "minutes"} read
          </P>
        </AuthorLink>
        <TagsAndDate>
          <Tags>
            {tagsArray.map((tag, index) => {
              return <StackLang lang={tag} key={index} active={true} />
            })}
          </Tags>
          {/* <Date>{data.mdx.frontmatter.date}</Date> */}
        </TagsAndDate>

        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <PaginationWrapper page="singlePost">
          <li>
            {previous && (
              <PaginationElement
                to={`/blog/${previous.frontmatter.slug}`}
                rel="prev"
                page="singlePost"
              >
                {"<< " + previous.frontmatter.title}
              </PaginationElement>
            )}
          </li>
          <li>
            {next && (
              <PaginationElement
                to={`/blog/${next.frontmatter.slug}`}
                rel="next"
                page="singlePost"
              >
                {next.frontmatter.title + " >>"}
              </PaginationElement>
            )}
          </li>
        </PaginationWrapper>
      </Post>
    </Container>
  )
}

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      timeToRead
      frontmatter {
        date(formatString: "Do MMMM, YYYY")
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

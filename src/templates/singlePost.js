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
import Img from "gatsby-image"

import { Container, FeatureImage, Post, Seo } from "../components"
import ImageLoad from "../utils/ImageLoader"
import StackLang from "../components/StackTag"

export default function singlePost({ data, pageContext, fixed }) {
  // const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed
  const seoImage = data.mdx.frontmatter.featureImage.publicURL
  const { previous, next } = pageContext
  const tagsArray = data.mdx.frontmatter.tags.split(", ")
  const minRead = data.mdx.timeToRead
  const myAvatar = data.imageSharp.fixed
  const truncate = (str, no_words = 4) => {
    return `${str.split(" ").splice(0, no_words).join(" ")} ...`
  }
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
            {/* <ImageLoad
              src={require("../images/avatar.jpg")}
              alt="Decription"
            /> */}
            <Img
              fixed={myAvatar}
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "12% 25% 30% 20%/50% 20% 15% 30%",
                // borderRadius: "50%",
                marginRight: "1rem",
                objectFit: "contain",
                textAlign: "center",
              }}
            />
            <P color="dark2">Temitope</P>
          </Link>
          <P color="dark2">{data.mdx.frontmatter.date}</P>
          <P color="dark2">
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
                {"<< " + truncate(previous.frontmatter.title)}
              </PaginationElement>
            )}
          </li>
          <li>
            {next && (
              <PaginationElement
                to={`/blog/${next.frontmatter.slug}`}
                rel="next"
                className="next"
                page="singlePost"
              >
                {truncate(next.frontmatter.title) + " >>"}
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
    imageSharp(fixed: { originalName: { eq: "avatar.jpg" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
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

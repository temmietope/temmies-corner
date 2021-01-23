import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../images/logo.png"

export function Seo({
  description,
  lang,
  meta,
  image: metaImage,
  title,
  keywords,
  pathname,
}) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            resize(width: 1200) {
              width
              height
              src
            }
          }
        }
        site {
          siteMetadata {
            title
            description
            author
            keywords
            url
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description

  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.url}${metaImage.src}`
      : null

  const defaultImage =
    file.childImageSharp && file.childImageSharp.resize.src
      ? `${site.siteMetadata.url}${file.childImageSharp.resize.src}`
      : null

  const canonical = pathname ? `${site.siteMetadata.url}${pathname}` : null
  const metaKeywords = keywords
    ? site.siteMetadata.keywords.concat(keywords)
    : site.siteMetadata.keywords

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={`%s - ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
              { rel: "shortcut-icon", type: "image/png", href: `${favicon}` },
            ]
          : [{ rel: "shortcut-icon", type: "image/png", href: `${favicon}` }]
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: metaKeywords.join(","),
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: canonical || site.siteMetadata.url,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : file.childImageSharp.resize
            ? [
                {
                  property: "og:image",
                  content: defaultImage,
                },
                {
                  property: "og:image:width",
                  content: file.childImageSharp.resize.width,
                },
                {
                  property: "og:image:height",
                  content: file.childImageSharp.resize.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

// export default Seo

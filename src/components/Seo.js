import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import favicon from "../images/logo.png"
export const Seo = ({ description, keywords, title, image, url, author }) => {
  const slug = typeof window !== "undefined" ? window.location.pathname : ""
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaAuthor = author || data.site.siteMetadata.author
        const metaTitle = title || data.site.siteMetadata.title
        const metaUrl = url || `${data.site.siteMetadata.url}${slug}`
        const metaImage = image || data.site.siteMetadata.image
        const metaKeywords = keywords || [
          "frontend",
          "tech",
          "javascript",
          "framework",
          "react",
          "vue",
        ]
        return (
          <Helmet
            htmlAttributes={{ lang: "en" }}
            title={metaTitle}
            link={[
              { rel: "shortcut-icon", type: "image/png", href: `${favicon}` },
            ]}
            meta={[
              {
                name: `charSet`,
                content: "utf-8",
              },
              {
                name: "description",
                content: metaDescription,
              },
              {
                name: "auto",
                content: metaAuthor,
              },
              {
                property: `og:title`,
                content: metaTitle,
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
                property: `og:site_name`,
                content: "Temitope Ayodele",
              },
              {
                property: `og:site_name`,
                content: "Temitope Ayodele",
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                property: `twitter:url`,
                content: metaUrl,
              },
              {
                name: `twitter:creator`,
                content: metaAuthor,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: metaImage,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
        url
      }
    }
  }
`

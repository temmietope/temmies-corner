import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import favicon from "../images/logo.png"
export const Seo = ({
  description,
  keywords,
  title,
  image,
  url,
  meta,
  pathname,
  author,
}) => {
  const slug = typeof window !== "undefined" ? window.location.pathname : ""
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null

      
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
        const canonical = pathname
          ? `${data.site.siteMetadata.siteUrl}${pathname}`
          : null
        return (
          <Helmet
            htmlAttributes={{ lang: "en" }}
            title={metaTitle}
            link={[
              { rel: "shortcut-icon", type: "image/png", href: `${favicon}` },
            ]}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            link={
              canonical
                ? [
                    {
                      rel: "canonical",
                      href: canonical,
                    },
                  ]
                : []
            }
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
                name: "author",
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
            ]
              .concat(
                metaKeywords && metaKeywords.length > 0
                  ? {
                      name: `keywords`,
                      content: metaKeywords.join(`, `),
                    }
                  : []
              )
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
                  : [
                      {
                        name: "twitter:card",
                        content: "summary",
                      },
                    ]
              ).concat(meta)}
          />
        )
      }}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
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

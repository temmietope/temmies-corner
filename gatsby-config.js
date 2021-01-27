module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Temitope Ayodele | Frontend Engineer",
    description:
      "Temitope Ayodele's personal website. She is a Frontend and Web Accessibility Engineer and she is passionate about optimizing for web performance, user experience and accessibility.",
    siteUrl: "https://temmie.me",
    twitterUsername: "@temmmie_",
    author: "Temitope Ayodele",
    keywords: [
      "frontend",
      "tech",
      "javascript",
      "framework",
      "react",
      "vue",
      "blog",
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx-embed`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto mono`, `Nunito\:400,400i,700,700i`],
        display: "swap",
      },
    },
  ],
}

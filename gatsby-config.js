module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Temitope | Frontend Engineer",
    description:
      "Temitope Ayodele's personal website. She is a Frontend and Web Accessibility Engineer and she is passionate about optimizing for web performance, user experience and accessibility.",
    url: "https://temmie.me",
    image: "logo.svg",
    twitterUsername: "@temmmie_",
    author: "Temitope",
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

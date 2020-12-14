exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
            id
          }
        }
      }
    }
  `)

  // Create paginated pages for post
  const posts = data.allMdx.edges
  const postPerPage = 4
  const numPages = Math.ceil(posts.length / postPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  //Create single blog posts
  posts.forEach((edge, index) => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    actions.createPage({
      path: `blog/${slug}`,
      component: require.resolve(`./src/templates/singlePost.js`),
      context: { id, previous, next },
    })
  })
}

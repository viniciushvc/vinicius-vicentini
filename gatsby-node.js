const path = require('path')

const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
    })
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName
    const separtorIndex = slug.indexOf('--') ? slug.indexOf('--') : 0
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0

    if (source !== 'parts') {
      createNodeField({
        node,
        name: 'slug',
        value: `${separtorIndex ? '/' : ''}${slug.substring(shortSlugStart)}`,
      })
    }
    createNodeField({
      node,
      name: 'prefix',
      value: separtorIndex ? slug.substring(1, separtorIndex) : '',
    })
    createNodeField({
      node,
      name: 'source',
      value: source,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/Post/index.js')
    const tagTemplate = path.resolve('src/templates/Tag/index.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [fields___prefix], order: DESC }
              limit: 1000
              filter: { frontmatter: { draft: { ne: true } } }
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                    prefix
                    source
                  }
                  frontmatter {
                    title
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const items = result.data.allMarkdownRemark.edges

        /* Cria um lista de tags */
        const tagSet = new Set()
        items.forEach(edge => {
          const {
            node: {
              frontmatter: { tags },
            },
          } = edge

          if (tags && tags !== null) {
            tags.forEach(tag => tagSet.add(tag))
          }
        })

        function kebabCase(str) {
          const result = str.replace(
            /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,
            match => '-' + match.toLowerCase()
          )
          return str[0] === str[0].toUpperCase() ? result.substring(1) : result
        }

        /* Cria as páginas de tag */
        const tagList = Array.from(tagSet)
        tagList.forEach(tag => {
          createPage({
            path: `/tag/${kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        })

        /* Cria a página de posts */
        const posts = items.filter(item => item.node.fields.source === 'posts')
        posts.forEach(({ node }) => {
          const { slug, source } = node.fields
          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              source,
            },
          })
        })
      })
    )
  })
}

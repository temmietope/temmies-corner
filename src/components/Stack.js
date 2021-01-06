import React from "react"
import { Project, ProjectsList, StackWrapper } from "../elements"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import StackLang from "./StackTag"

export default function Stack() {
  const data = useStaticQuery(graphql`
    query {
      swipe: file(relativePath: { eq: "swipe.svg" }) {
        publicURL
      }
      voguepay: file(relativePath: { eq: "voguepay.svg" }) {
        publicURL
      }
      reactDevtoEmbed: file(relativePath: { eq: "react-devto-embed.svg" }) {
        publicURL
      }
      goTo: file(relativePath: { eq: "go-to-arrow.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github-dark.svg" }) {
        publicURL
      }
    }
  `)
  const projects = [
    {
      name: "react-devto-embed",
      img: "reactDevtoEmbed",
      description:
        "An NPM package that allows you to embed your dev.to articles. With this library you can get the list of articles of a specific dev.to user in a beautifully designed UI. The perks of this library is that it is easy to use and very customizable",
      stack: ["react", "javascript", "blog", "library"],
      githubRepo: "https://github.com/temmietope/react-devto-embed",
      hostedLink: "https://www.npmjs.com/package/react-devto-embed",
    },
    {
      name: "Voguepay",
      img: "voguepay",
      description:
        "Landing website for Voguepay. Voguepay is a leading fintech company in Africa that makes it easy to receive money and make payments locally with their fast and secure APIs and software solutions designed to help businesses capture more revenue.",
      stack: ["react", "styledComponents", "SEO", "redux", "css"],
      hostedLink: "https://voguepay.com/",
    },
    {
      name: "Temmie's corner",
      img: "github",
      description:
        "My portfolio website that contains my biography and my blog. Built with Gatsby and graphql",
      stack: ["gatsby", "graphql", "styledComponents"],
      githubRepo: "https://github.com/temmietope/temmies-corner",
      hostedLink: "https://temmies-corner.netlify.app/",
    },
    {
      name: "Swipe",
      img: "swipe",
      description:
        "Swipe is a product design company that designs and builds great solutions for Startups and the Enterprise.",
      stack: ["react", "styledComponents"],
      hostedLink: "https://swipemax.com/",
    },
  ]
  return (
    <StackWrapper>
      <h3>Featured Projects</h3>
      <ProjectsList>
        {projects.map(project => {
          return (
            <Project>
              <div className="logo-wrapper">
                <img src={data[project.img].publicURL} alt="my logo" />
              </div>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <div className="stack-list">
                {project.stack.map((s, index) => (
                  <StackLang lang={s} key={index} />
                ))}
              </div>
              <div className="project-links">
                {project.githubRepo && (
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={data.github.publicURL} alt="my logo" />
                  </a>
                )}
                {project.hostedLink && (
                  <a
                    href={project.hostedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={data.goTo.publicURL} alt="my logo" />
                  </a>
                )}
              </div>
            </Project>
          )
        })}
      </ProjectsList>
    </StackWrapper>
  )
}

// export const imageQuery = graphql`
//   query {
//     fileName: file(relativePath: { eq: "office.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 400, maxHeight: 250) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

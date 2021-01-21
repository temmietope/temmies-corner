import React, { useState } from "react"
import StackLang from "./StackTag"
import { useStaticQuery } from "gatsby"
import { Project, ProjectsList, StackWrapper, H2, P } from "../elements"

const ProjectCard = ({ project }) => {
  const [coloredTag, setColoredTag] = useState(false)
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

  return (
    <Project
      onMouseEnter={() => setColoredTag(true)}
      onMouseLeave={() => setColoredTag(false)}
    >
      <div className="logo-wrapper">
        <img src={data[project.img].publicURL} alt="my logo" />
      </div>
      <div className="project-content">
        <H2>{project.name}</H2>
        <div className="stack-list">
          {project.stack.map((s, index) => (
            <StackLang lang={s} key={index} active={coloredTag} />
          ))}
        </div>
        <P>{project.description}</P>

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
      </div>
    </Project>
  )
}

export default ProjectCard

import React, { useState } from "react"
import StackLang from "./StackTag"
import { useStaticQuery, graphql } from "gatsby"
import { Project, ProjectsList, StackWrapper, H2, P } from "../elements"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

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
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
      reactDevtoEmbed: file(relativePath: { eq: "react-devto-embed.svg" }) {
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
        <P className="desc">{project.description}</P>

        <div className="project-links">
          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          )}
          {project.hostedLink && (
            <a
              href={project.hostedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </Project>
  )
}

export default ProjectCard

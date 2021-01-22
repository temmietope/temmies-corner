import React from "react"
import { ProjectsList, StackWrapper, H3 } from "../elements"
import Project from "./Project"

export default function Stack() {
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
      img: "logo",
      description:
        "My portfolio website that contains my biography and my blog. Built with Gatsby and graphql",
      stack: ["gatsby", "graphql", "styledComponents"],
      githubRepo: "https://github.com/temmietope/temmies-corner",
      hostedLink: "https://temmie.me/",
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
      <H3 color='dark1'>Featured Projects</H3>
      <ProjectsList>
        {projects.map((project, index) => {
          return <Project key={index} project={project} />
        })}
      </ProjectsList>
    </StackWrapper>
  )
}

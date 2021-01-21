import React from "react"
import {
  HomeHeader,
  HomeHeaderAvatar,
  HomeHeaderProfileSummary,
} from "../elements/HeaderElements"
import { H1, H2, P } from "../elements"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default function Header({ fluid }) {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { eq: "avatar.jpg" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return (
    <HomeHeader>
      <HomeHeaderProfileSummary>
        <div className="intro">
          <H1>
            Hi, I am <span className="my__name">TEMITOPE AYODELE</span>
          </H1>
          <H2 className="role">Frontend Engineer and Technical writer</H2>
          <P className="summary">
            I am a web-accessibility and open-source advocate. I am a great
            team-player who has worked with awesome teams to build great
            products. I am self-taught with rich experience on React and Vue.
          </P>
        </div>
        <div className="contact__links">
          <a
            href="https://github.com/temmietope"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/temitope-ayodele/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://dev.to/temmietope"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dev
          </a>
        </div>
      </HomeHeaderProfileSummary>
      <HomeHeaderAvatar>
        <Img
          fluid={fluid ? fluid : data.imageSharp.fluid}
          style={{
            width: "100%",
            height: "100%",
            // borderRadius: "50%",
            borderRadius: "12% 25% 30% 20%/50% 20% 15% 30%",

            objectFit: "cover",
          }}
        />
      </HomeHeaderAvatar>
    </HomeHeader>
  )
}

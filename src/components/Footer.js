import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterCopyright,
  P,
  H3,
  Logo,
  FooterEmail,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      send: file(relativePath: { eq: "send.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterEmail>
        <H3 color="light1">Work with me?</H3>
        <P color="light1" size="medium">
          Interested in working together? We should queue up a chat. I'll buy
          the coffee!
        </P>
        <button>
          <a href="mailto:temmieayodele@gmail.com" className="mail btn">
            Send me a mail!
            <img src={data.send.publicURL} alt="mail-icon" />
          </a>
        </button>
      </FooterEmail>
      <Logo>
        <Link to="/" className="brand" onClick={() => window.scrollTo(0, 0)}>
          <img src={data.logo.publicURL} alt="brand-logo" />
        </Link>
      </Logo>
      <div className="mantra">
        <P color="white">Frontend and Web Accessibility Engineer</P>
      </div>
      <FooterSocialWrapper>
        <a
          href="https://www.github.com/temmietope"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={data.github.publicURL} alt="github-icon" />
        </a>

        <a
          href="https://www.twitter.com/temmmie_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={data.twitter.publicURL} alt="twitter-icon" />
        </a>
        <a
          href="https://www.instagram.com/temmie_tope"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={data.instagram.publicURL} alt="instagram-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/temitope-ayodele/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={data.linkedin.publicURL} alt="linkedin-icon" />
        </a>
      </FooterSocialWrapper>
      <FooterCopyright>
        <p>Designed and Developed by me</p>
      </FooterCopyright>
    </FooterWrapper>
  )
}

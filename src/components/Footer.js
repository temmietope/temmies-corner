import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
      youtube: file(relativePath: { eq: "youtube.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a href="facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={data.facebook.publicURL} alt="facebook-icon" />
          </a>
          <a href="twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={data.twitter.publicURL} alt="twitter-icon" />
          </a>
          <a href="instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={data.instagram.publicURL} alt="instagram-icon" />
          </a>
          <a href="youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={data.youtube.publicURL} alt="youtube-icon" />
          </a>
        </FooterSocialIcons>
        <p>&copy 2020 Company. All right reserved</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}

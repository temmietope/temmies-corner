import React from "react"
import { HomeHeader } from "../elements/HeaderElements"
import ImageLoad from "../utils/ImageLoader"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default function Header({ fixed }) {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "avatar.jpg" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)
  return (
    <HomeHeader>
      <div className="profile__summary">
        <div className="intro">
          <h2>
            Hi, I am <span className="my__name">TEMITOPE AYODELE</span>
          </h2>
          <p>A Frontend engineer based in Lagos, Nigeria</p>
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
      </div>
      <div className="avatar">
        <Img
          fixed={fixed ? fixed : data.imageSharp.fixed}
          style={{
            // position: 'absolute',
            // left: 0,
            // top: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "4px solid gray",
            objectFit: "cover",
          }}
        />
        {/* <ImageLoad
          src={require('../images/avatar.jpg')}
        //   placeholder={require('../../src/assets/images/blur.png')}
          alt="Decription"
        /> */}
      </div>
    </HomeHeader>
  )
}

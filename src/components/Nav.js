import React, { useState, useEffect } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Logo, NavDiv, NavWrapper, NavMenu } from "../elements"

export const Nav = ({ scrollToRef, theme, toggleTheme }) => {
  const data = useStaticQuery(graphql`
    query {
      lightlogo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
      darklogo: file(relativePath: { eq: "white-logo.svg" }) {
        publicURL
      }
      sun: file(relativePath: { eq: "sun.svg" }) {
        publicURL
      }
      moon: file(relativePath: { eq: "moon.svg" }) {
        publicURL
      }
    }
  `)
  const [show, setShow] = useState(false)
  useEffect(() => {
    show
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll")
  }, [show])
  return (
    // <NavWrapper>
    //   <Link to="/">
    //     <img src={data.logo.publicURL} alt="my logo" />
    //   </Link>
    // </NavWrapper>
    <NavWrapper>
      <NavDiv>
        <Logo>
          <Link to="/" className="brand" onClick={() => window.scrollTo(0, 0)}>
            <img
              src={
                theme === "light"
                  ? data.lightlogo.publicURL
                  : data.darklogo.publicURL
              }
              alt="my logo"
            />
          </Link>
        </Logo>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          onChange={() => setShow(!show)}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <NavMenu show={show}>
          <li onClick={() => window.scrollTo(0, 0)}>
            <Link to="/blog" activeClassName="active" className="nav-link">
              Blog
            </Link>
          </li>
          <li onClick={() => window.scrollTo(0, 0)}>
            <a
              href="https://sites.google.com/view/temitope-ayodele/home"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <span className="nav-link" onClick={scrollToRef}>
              Contact
            </span>
          </li>
          <li className="mode__toggle">
            <button onClick={() => toggleTheme()}>
              <img
                src={
                  theme === "light" ? data.moon.publicURL : data.sun.publicURL
                }
                alt="toggle icon"
              />
            </button>
          </li>
        </NavMenu>
      </NavDiv>
    </NavWrapper>
  )
}

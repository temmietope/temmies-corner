import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { Logo, NavDiv, NavWrapper } from "../elements"

export const Nav = ({ scrollToRef }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.jpeg" }) {
        publicURL
      }
    }
  `)
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
            TIA
          </Link>
        </Logo>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {/* <li>
            <a href="/#about">About</a>
          </li> */}
          <li onClick={() => window.scrollTo(0, 0)}>
            <Link to="/blog" activeClassName="active" className="nav-link">
              Blog
            </Link>
          </li>
          {/* <li>
            <a href="/#contact">Contact</a>
          </li> */}
          <li onClick={() => window.scrollTo(0, 0)}>
            <Link to="/resume" activeClassName="active" className="nav-link">
              Resume
            </Link>
          </li>
          <li>
            <span className="nav-link" onClick={scrollToRef}>
              Contact
            </span>
          </li>
          {/* <li className="mode__toggle">
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </li> */}
        </ul>
      </NavDiv>
    </NavWrapper>
  )
}

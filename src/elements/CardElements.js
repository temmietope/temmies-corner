import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const CardWrapper = styled(props => <Link {...props} />)`
  padding: 2rem;
  height: 20rem;
  grid-gap: 3%;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  position: relative;
  transition: all 1s;
  background: #fff;
  border-radius: 7px;
  h2 {
    font-size: 1.8rem;
    min-height: 30%;
    max-height: 30%;
  }
  .excerpt {
    font-size: 1.2rem;
    line-height: 2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
  small {
    min-height: 10%;
    max-height: 10%;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span:nth-child(1) {
      font-weight: bold;
    }
  }
  :hover {
    filter: brightness(1.35);
    box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.5);
  }
  ${props =>
    props.page === "allPosts" &&
    css`
      border-radius: 10px;
      box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
      border-left: 10px solid gray;
      margin-top: 2rem;
    `}
  ${props =>
    props.page === "homePage" &&
    css`
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
    `}
`

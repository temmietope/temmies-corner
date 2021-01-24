import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

// export const PaginationWrapper = styled.div`
/* grid-column: 2 / span 12;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  a:nth-child(1) {
    color: ${props =>
      props.isFirst ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }
  a:nth-child(2) {
    color: ${props =>
      props.isLast ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    cursor: ${props => (props.isLast ? "default" : "pointer")};
  }
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  } */
// `

// export const PaginationElement = styled(props => <Link {...props} />)`
/* font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  text-decoration: none;
  margin: 0 2rem;

  &:hover,
  &:focus {
    text-decoration: underline;
  } */
// `

export const PaginationWrapper = styled.ul`
  width: 100%;
  list-style: none;
  display: ${props => (props.numPages === 1 ? "none" : "flex")};
  justify-content: ${props =>
    props.page === "singlePost" ? "space-between" : "center"};
  align-items: center;
  height: 4rem;
  box-shadow: 0px 3px 6px #d9d4e7;
  padding: 0 2%;
  margin-top: 2rem;
  box-sizing: border-box;
  @media ${props => props.theme.breakpoints.tablet} {
    /* display: grid; */
    /* grid-template-columns: 48% 48%; */
    ${props =>
      props.page === "singlePost" &&
      css`
        height: inherit;
        padding: 2%;
        box-sizing: border-box;
      `}
  }
`

export const PaginationElement = styled(props => <Link {...props} />)`
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  padding: 0 1rem;
  color: ${props=>props.theme.paragraph}
;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
  ${props =>
    props.currentPage &&
    css`
      text-decoration: underline;
      border-radius: 50%;
      font-weight: 700;
    `}
  ${props =>
    props.page === "singlePost" &&
    css`
      font-weight: 700;
      font-size: 1rem;
      padding:0 0.5rem;
      @media ${props => props.theme.breakpoints.tablet} {
        font-size: 0.6rem;
        line-height: 100%;
      }
    `}
`

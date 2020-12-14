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
  list-style: none;
  display: ${props => (props.numPages === 1 ? "none" : "flex")};
  justify-content: ${props =>
    props.page === "singlePost" ? "space-between" : "center"};
  align-items: center;
  height: 4rem;
  box-shadow: 0px 3px 6px #d9d4e7;
  margin-top: 2rem;
`

export const PaginationElement = styled(props => <Link {...props} />)`
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  padding: 0 1rem;
  color: #333;
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
    `}
`

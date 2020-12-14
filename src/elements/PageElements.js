import styled, { css } from "styled-components"

export const PageHeader = styled.div`
  width: 100%;
  /* padding: 3rem 0; */
  h2 {
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
  }

  ${props =>
    props.page === "home" &&
    css`
      padding: 1.5rem 0;
      h2 {
        font-size: 1.8rem;
      }
    `}
`

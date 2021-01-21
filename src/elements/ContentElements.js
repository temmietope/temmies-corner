import styled, { css } from "styled-components"

export const ContentWrapper = styled.main`
  width: 100%;
  transition: all 1s;
  ${props =>
    props.page === "home" &&
    css`
      padding: 3% var(--padding);
      background: #d9d4e7;
      .posts {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 48% 48%;
        grid-gap: 2rem;
        justify-content: space-between;
      }
      .home__content-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* h3 {
          font-size: 1.5rem;
        } */
        .view-all {
          text-decoration: none;
          cursor: pointer;
          box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.3);
          border-radius: 12% 25% 30% 20%/50% 20% 15% 30%;
          border: 0.7px solid;
          padding: 2%;
          transition: all 0.7s;
          text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.3);
          filter: brightness(1.1);
          background: #d9d4e7;
          :hover {
            transform: scale(1.07);
          }
        }
      }
    `}
  ${props =>
    props.page === "allPosts" &&
    css`
      padding: 3% var(--padding);
      width: 100%;
      .posts {
        margin-top: 5rem;
        height: inherit;
        margin-bottom: 2rem;
        box-sizing: border-box !important;
        max-width: 100%;
        display: grid;
        grid-template-columns: 48% 48%;
        grid-gap: 1rem 2%;
      }
    `}
    @media ${props => props.theme.breakpoints.mobile} {
    .posts {
      grid-template-columns: 100%;
    }
  }
  ${props =>
    (props.page =
      "notFound" &&
      css`
        text-align: center;
      `)}
`

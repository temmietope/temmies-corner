import styled, { css } from "styled-components"

export const ContentWrapper = styled.main`
  /* grid-column: 4 / span 8;
  grid-rows: 3 / span 5;
  background-color: ${props => props.theme.colors.light2};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  grid-column: 2 / span 6;

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
    `${props.theme.spacings.medium} ${props.theme.spacings.xxLarge}`};
  } */
  width: 100%;
  /* padding: 2rem; */

  ${props =>
    props.page === "home" &&
    css`
      padding: 3% var(--padding);
      background: #edf7fa;
      .posts {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 48% 48%;
        /* grid-gap: 2%; */
        justify-content: space-between;
      }
      .home__content-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
          font-size: 1.5rem;
        }
        .view-all {
          text-decoration: none;
          cursor: pointer;
        }
      }
    `}/* ${props =>
    props.page === "allPosts" &&
    css`
      .posts {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 1rem;
        border: 1px solid;
      }
    `} */
`

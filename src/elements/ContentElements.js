import styled, { css } from 'styled-components'

export const ContentWrapper = styled.main`
  /* grid-column: 4 / span 8;
  grid-rows: 3 / span 5;
  background-color: ${(props) => props.theme.colors.light2};
  padding: ${(props) =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${(props) => props.theme.shadows.shadow1};
  grid-column: 2 / span 6;

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: ${(props) =>
    `${props.theme.spacings.medium} ${props.theme.spacings.xxLarge}`};
  } */
  width: 100%;
  /* padding: 2rem; */
  .view-all {
    width: 100%;
    height: inherit;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      /* width: 50%; */
      padding: 1rem 2rem;
      background: none;
      font-size: 1.3rem;
      width: fit-content;
      transition: filter 0.3s ease;
      cursor: pointer;
      text-decoration: none;
      border: none;
    }
  }

  ${(props) =>
    props.page === 'home' &&
    css`
      .posts {
        margin-top: 2rem;
      }
    `}/* ${(props) =>
    props.page === 'allPosts' &&
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

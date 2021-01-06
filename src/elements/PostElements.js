import styled from "styled-components"

// export const PostWrapper = styled.main`
//   grid-column: 4 / span 8;
//   grid-rows: 3 / span 5;
//   background-color: ${props => props.theme.colors.light2};
//   padding: ${props =>
//     `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
//   box-shadow: ${props => props.theme.shadows.shadow1};
//   z-index: 10;

// code {
//   font-family: ${props=>props.theme.fonts.code};
//   font-size:1rem;
//   line-height: 1.875rem;
//   color: ${props=>props.theme.colors.light1};
//   background-color: ${props=>props.theme.colors.dark3};
//   padding: 0 0.3rem;
// }
//   @media ${props => props.theme.breakpoints.tablet} {
//     grid-column: 2 / span 6;
//   }

//   @media ${props => props.theme.breakpoints.mobile} {
//     padding: ${props =>
//       `${props.theme.spacings.medium} ${props.theme.spacings.xxLarge}`};
//   }
// `

export const PostWrapper = styled.main`
  padding: 2rem 8rem;
  margin-bottom: 10rem;
  font-size: 1.5rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 120%;
    margin: 3% 0;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    text-align: center;
    /* box-shadow: 0px 3px 6px #d9d4e7; */
    border-radius: 20px;
    padding: 1rem;
    margin: 5% 0;
    margin-bottom: 1%;
  }
  p {
    margin: 1rem 0;
    line-height: 150%;
  }
  img {
    border-radius: 10px;
    text-align: center;
    /* width: 100%; */
    :hover {
      filter: brightness(0.8);
    }
  }
`

export const TagsAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1rem;
`

export const Date = styled.small``

export const Tags = styled.div`
  display: flex;
  margin: ${props => (props.page === "home" ? "1rem 0" : "2rem 0")};
  p {
    padding: 0.15rem 0.5rem;
    margin: 0 0.3rem;
    border-radius: 5px;
    display: grid;
    place-items: center;
    /* color: #333; */
    font-weight: bold;
  }
  p:nth-child(1) {
    margin-left: 0;
  }
`

export const AuthorLink = styled.div`
  margin: 1rem 0;
  margin-bottom: 5%;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    :hover {
      text-decoration: underline;
    }
  }
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
  p {
    padding: 0 1%;
  }
`

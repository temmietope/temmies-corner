import styled from "styled-components"

export const PostWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-rows: 3 / span 5;
  background-color: ${props => props.theme.colors.light2};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;


//add styles on the posts, normal css styles

code {
  font-family: ${props=>props.theme.fonts.code};
  font-size:1rem;
  line-height: 1.875rem;
  color: ${props=>props.theme.colors.light1};
  background-color: ${props=>props.theme.colors.dark3};
  padding: 0 0.3rem;
}
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.xxLarge}`};
  }
`

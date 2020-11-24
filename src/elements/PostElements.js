import styled from "styled-components"

export const PostWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-rows: 3 / span 5;
  background-color: ${props => props.theme.colors.light2};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  grid-column: 2 / span 6;

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.xxLarge}`};
  }
`

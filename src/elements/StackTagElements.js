import styled from "styled-components"

export const StackTag = styled.p`
  opacity: ${props => (props.active ? "1" : "0.5")};
  color: #fff;
  transition: all 1s;
  background-color: ${props => (props.active ? props.color : "#888")};
  cursor: pointer;
  :hover {
    transform: scale(1.07);
  }
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1rem !important;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 0.7rem !important;
  }
`

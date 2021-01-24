import styled from "styled-components"

export const StackTag = styled.p`
  opacity: ${props => (props.active ? "1" : "0.7")};
  color: ${props => (props.active ? "#fff" : props.theme.tagText)} !important;
  transition: all 0.5s;
  background-color: ${props => (props.active ? props.color : props.theme.tag)};
  cursor: pointer;
  border: none !important;
  box-shadow: none !important;
  text-transform: lowercase;
  :hover {
    transform: scale(1.07);
  }
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1rem !important;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 0.7rem !important;
  }
  @media ${props => props.theme.breakpoints.small} {
    opacity: 1;
    background-color: ${props => props.color && props.color};
  }
`

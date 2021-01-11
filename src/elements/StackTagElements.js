import styled from "styled-components"

export const StackTag = styled.p`
  opacity: ${props => (props.active ? "1" : "0.5")};
  color: #fff;
  transition: all 1s;
  background-color: ${props => (props.active ? props.color : "#888")};
  cursor: pointer;
  :hover {
    transform: scale(1.07);
    box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.5);
  }
`

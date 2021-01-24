import styled, { css } from "styled-components"

export const PageHeader = styled.div`
  /* width: 100%; */
  /* padding: 3rem 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.7s;
  filter: brightness(1.1);
  :hover {
    transform: scale(1.07);
  }
  h1 {
    font-weight: bold;
    /* background: #d9d4e7; */
    width: fit-content;
    /* box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.3);
    border-radius: 12% 25% 30% 20%/50% 20% 15% 30%;
    border: 0.7px solid;
    padding: 2%;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.3); */
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

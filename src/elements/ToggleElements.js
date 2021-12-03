import styled from "styled-components"

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  width: 5rem;
  height: 1.5rem;
  outline: none;

  i {
    transition: all 0.3s linear;

    /* // sun icon */
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
      color: white;
    }

    /* // toggle icon */
    &:nth-child(2) {
      color: ${({ lightTheme }) => (lightTheme ? "#eee" : "#777")};
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateX(-10px)" : "translateX(10px)"};
      font-size: 0.5rem;
    }

    /* // moon icon */
    &:nth-child(3) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
      color: #777;
    }
  }
`

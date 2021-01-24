// Toggle.js
import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <i className="far fa-sun icon" />
      <i className="fas fa-circle" />
      <i className="fas fa-moon icon" />
    </ToggleContainer>
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

// Toggle.styled.js
const ToggleContainer = styled.button`
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
    /* height: 2rem;
    width: 2.5rem; */
    transition: all 0.3s linear;

    /* // sun icon */
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(0)' : 'translateY(100px)'};
      color: white;
    }

    /* // toggle icon */
    &:nth-child(2) {
      color: ${({ lightTheme }) => (lightTheme ? '#eee' : '#777')};
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateX(-10px)' : 'translateX(10px)'};
        font-size: 0.5rem;
    }

    /* // moon icon */
    &:nth-child(3) {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
      color: #777;
    }
  }
`
export default Toggle

import React from "react"
import { func, string } from "prop-types"
import { ToggleContainer } from "../elements"

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light"
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


export default Toggle

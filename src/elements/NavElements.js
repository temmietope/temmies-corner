import styled from "styled-components"

export const NavWrapper = styled.nav`
  position: sticky;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-backdrop-filter: blur(10px);
  -o-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);

  backdrop-filter: blur(10px);
  /* height: 3rem; */
  .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: bolder;
    background: -webkit-linear-gradient(
      #434349,
      #6d6d75,
      #23232b,
      #23232b,
      #6d6d75
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 434349;
  }
`

export const Logo = styled.div`
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bolder;
  background: -webkit-linear-gradient(
    #434349,
    #6d6d75,
    #23232b,
    #23232b,
    #6d6d75
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 434349;
  /* input {
    position: absolute;
    right: 1rem;
    height: 100%;
    opacity: 0;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    li {
      padding: 1rem;
      .nav-link {
        text-decoration: none;
        font-size: 1rem;
        text-transform: uppercase;
        color: #333;
        :hover {
          color: blue;
        }
      }
    }
  } */
`

export const NavDiv = styled.div`
  width: 95%;
  height: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: relative; */
  .menu-icon,
  .menu-btn {
    display: none;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 98%;
    padding: 0.5rem 0.1rem;
    .menu-icon {
      cursor: pointer;
      display: inline-block;
      float: right;
      padding: 28px 20px;
      position: relative;
      user-select: none;
      z-index: 9999;
    }
    .menu-icon .navicon {
      display: block;
      height: 2px;
      position: relative;
      transition: background 0.2s ease-out;
      width: 1.7rem;
      background: #444;
    }
    .menu-icon .navicon:before,
    .menu-icon .navicon:after {
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
      background: #444;
    }
    .menu-icon .navicon:before {
      top: 6px;
    }
    .menu-icon .navicon:after {
      top: -6px;
    }
    .menu-btn:checked ~ .menu-icon .navicon {
      background: transparent;
    }
    .menu-btn:checked ~ .menu-icon .navicon:before {
      transform: rotate(-45deg);
    }
    .menu-btn:checked ~ .menu-icon .navicon:after {
      transform: rotate(45deg);
    }

    .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
    .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
      top: 0;
    }
    .menu-btn {
      position: absolute;
      right: 3rem;
      height: 100%;
      width: 3rem;
      z-index: 9999;
      opacity: 0;
    }
  }
`

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  li {
    padding: 1rem;
    cursor: pointer;
    .nav-link {
      text-decoration: none;
      font-size: 1rem;
      text-transform: uppercase;
      color: #333;
      text-shadow: 1px 2px 1px rgba(167, 134, 223, 0.3);
      :hover {
        color: blue;
      }
    }
  }
  @media ${props => props.theme.breakpoints.mobile} {
    position: absolute;
    height: 100vh;
    width: 100%;
    opacity: ${props => (props.show ? "1" : "0")};
    visibility: ${props => (props.show ? "visible" : "hidden")};
    transition: all 1s;
    left: 0;
    top: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.9);
    -webkit-backdrop-filter: blur(4px);
    -o-backdrop-filter: blur(4px);
    -moz-backdrop-filter: blur(4px);

    backdrop-filter: blur(4px);
    li {
      font-weight: 700;
    }
  }
`

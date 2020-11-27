import styled from 'styled-components'

// export const NavWrapper = styled.nav`
//   grid-column: 2 / span 12;
//   grid-row: 1/2;
//   display: flex;
//   align-items: center;

//   &img {
//     height: 30px;
//   }

//   @media ${props => props.theme.breakpoints.tablet} {
//     grid-column: 2 / span 6;
//   }
// `

export const NavWrapper = styled.nav`
  /* position: fixed; */
  position: sticky;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  background: yellow;
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
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }
  li a {
    padding: 20px 20px;
    text-decoration: none;
    margin-right: 0 !important;
  }
  ul {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }
  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }
  .menu-icon .navicon {
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
    background: red;
  }
  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
    background: red;
  }
  .menu-icon .navicon:before {
    top: 5px;
  }
  .menu-icon .navicon:after {
    top: -5px;
  }
  .menu-btn {
    display: none;
  }
  .menu-btn:checked ~ .menu {
    max-height: 300px;
    height: 300px;
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

  .nav-link {
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    padding: 6px;
    position: relative;
  }
  /* a:not(.brand):after {
    background: #2b2c34;
  } */

  /* a {
    // color: #333;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    padding: 6px 0;
    margin-right: 1rem;
    position: relative;
  } */

  /* a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    // background: #333;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  } */

  /* a:hover:after {
    width: 100%;
    left: 0;
  } */

  @media (min-width: 900px) {
    li {
      float: left;
    }
    li a {
      padding: 20px 30px;
    }
    ul {
      clear: none;
      float: right;
      max-height: none;
      border: 1px solid;
      display: flex;
    }
    .menu-icon {
      display: none;
    }
  }
`

export const NavDiv = styled.div`
  width: 95%;
  height: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`

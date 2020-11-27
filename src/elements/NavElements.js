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
  background: white;
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
input{
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
  }
`

export const NavDiv = styled.div`
  width: 95%;
  height: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

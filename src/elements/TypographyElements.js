import styled from "styled-components"

export const P = styled.p`
  margin: ${props => (props.margin ? props.margin : 0)};
  font-size: 1.1rem;
  /* line-height: ${props => {
    switch (props.size) {
      case "medium":
        return "1.4375rem"
      case "small":
        return "1.375rem"
      case "xSmall":
        return "1.125rem"
      default:
        return "1.4375rem"
    }
  }}; */
  line-height: 150%;
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
  font-weight: ${props => {
    switch (props.weight) {
      case "normal":
        return 400
      case "bold":
        return 700
      default:
        return 400
    }
  }};
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "none")};
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1rem;
  }
`

export const H1 = styled.h1`
  font-size: 2.8rem;
  line-height: 120%;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2

      default:
        return props.theme.colors.dark1
    }
  }};
  font-weight: 400;
  text-align: ${props => (props.textAlign ? props.textAlign : "none")};
  margin: ${props => (props.margin ? props.margin : 0)};

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 2.5rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 2.3rem;
  }
`

export const H2 = styled.h2`
  font-size: 1.7rem;
  line-height: 120%;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  font-weight: 400;
  text-align: ${props => (props.textAlign ? props.textAlign : "none")};
  margin: ${props => (props.margin ? props.margin : 0)};
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.55rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1.4rem;
  }
`

export const H3 = styled.h3`
  font-size: 1.55rem;
  text-shadow: 1px 2px 1px rgba(167, 134, 223, 0.3);
  line-height: 1.875rem;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  font-weight: 400;
  text-align: ${props => (props.textAlign ? props.textAlign : "none")};
  margin: ${props => (props.margin ? props.margin : 0)};
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.4rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1.2rem;
  }
`

export const H4 = styled.h4`
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  font-weight: 400;
  text-align: ${props => (props.textAlign ? props.textAlign : "none")};
  margin: ${props => (props.margin ? props.margin : 0)};
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.3rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1rem;
  }
`

export const H5 = styled.h5`
  font-size: 1.2rem;
  line-height: 1.875rem;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  font-weight: 400;
  text-align: ${props => (props.textAlign ? props.textAlign : "none")};
  margin: ${props => (props.margin ? props.margin : 0)};
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 0.85rem;
  }
`

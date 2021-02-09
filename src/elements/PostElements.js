import styled from "styled-components"

export const PostWrapper = styled.main`
  padding: 0rem 8rem;
  margin-bottom: 10rem;
  font-size: 1.1rem;
  color: ${props => props.theme.paragraph};

  /* font-size: 1.5rem; */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 120%;
    margin: 3% 0;
    transition: all 0.5s;
    color: ${props => props.theme.header};
  }

  h1 {
    font-size: 2.8rem;
    font-weight: bold;
    text-align: center;
    padding: 1rem 0;
    /* margin: 5% 0; */
    margin: 0;
    margin-bottom: 1%;
    @media ${props => props.theme.breakpoints.tablet} {
      font-size: 2.5rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 2.3rem;
    }
  }

  h2 {
    font-size: 1.7rem;
    @media ${props => props.theme.breakpoints.tablet} {
      font-size: 1.55rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 1.4rem;
    }
  }

  h3 {
    font-size: 1.55rem;
    @media ${props => props.theme.breakpoints.tablet} {
      font-size: 1.4rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 1.2rem;
    }
  }

  h4 {
    font-size: 1.4rem;
    @media ${props => props.theme.breakpoints.tablet} {
      font-size: 1.2rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 1rem;
    }
  }

  p {
    margin: 1rem 0;
    line-height: 150%;
    color: ${props => props.theme.paragraph};
    font-size: 1.1rem;
    @media ${props => props.theme.breakpoints.mobile} {
      font-size: 1rem;
    }
  }

  a {
    color: ${props => props.theme.header};
  }

  ol,
  ul {
    margin-left: 8%;
  }

  li {
    padding: 1% 0;
  }

  img {
    border-radius: 10px;
    text-align: center;
    margin: 2% 0;
    max-width: 100%;
    :hover {
      filter: brightness(0.8);
    }
  }

  .full-width {
    text-align: center;
    object-fit: contain;
  }

  .float {
    float: left;
    margin: 2%;
    margin-left: 0;
  }
  .text-left {
    text-align: left;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  table tr:hover {
    filter: brightness(0.7);
  }

  table th {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    text-align: left;
    background-color: ${props => props.theme.footerEmail} !important;
    color: white;
  }

  .prism-code,
  code {
    background: ${props => props.theme.footerEmail} !important;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 2rem 5%;
    margin-bottom: 5%;
    font-size: 1.3rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 1rem;
  }

  /* @media ${props => props.theme.breakpoints.mobile}
   {
    font-size: 1.2rem;

    h1 {
      font-size: 2.5rem;
    }
  
  }
  
  @media ${props => props.theme.breakpoints.small}
   {
    font-size: 1rem;

    h1 {
      font-size: 2rem;
    }
  
  }
   */
`

export const TagsAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  margin: ${props => (props.page === "home" ? "0.6rem 0" : "0.8rem 0")};

  @media ${props => props.theme.breakpoints.mobile} {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const Date = styled.small`
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0;
    margin: 0;
    height: 1%;
    font-size: 0.7rem !important;
  }
`

export const Tags = styled.div`
  display: flex;
  p {
    padding: 0.15rem 0.5rem;
    margin: 0 0.3rem;
    border-radius: 5px;
  }

  p:nth-child(1) {
    margin-left: 0;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    margin: 1% 0;
    p {
      display: block;
    }
  }
`

export const AuthorLink = styled.div`
  margin: 1rem 0;
  margin-bottom: 5%;
  font-size: 1.2rem;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    p {
      font-weight: 700;
    }

    :hover {
      text-decoration: underline;
    }
  }

  p {
    padding: 0 1%;
    margin: 0;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    p {
      font-size: 1rem !important;
    }

    margin-bottom: 3%;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    margin: 1% 0;
    p {
      font-size: 0.8rem !important;
    }

    .link {
      .gatsby-image-wrapper {
        margin-right: 0.4rem !important;
      }
    }
  }

  @media ${props => props.theme.breakpoints.small} {
    p {
      font-size: 0.6rem !important;
    }
  }
`

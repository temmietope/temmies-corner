import styled from "styled-components"

// export const FooterWrapper = styled.footer`
//   grid-column: 2 / span 12;
//   min-height: 11.25rem;
//   padding: 3rem 0;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;

//   @media ${props => props.theme.breakpoints.tablet} {
//     grid-column: 2 / span 6;
//   }
// `

// export const FooterSocialWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   text-align: center;
//   background: red;
//   &p {
//     text-align: center;
//     flex: 0 0 100%;
//   }
// `

// export const FooterSocialIcons = styled.div`
//   flex: 0 0 100%;
//   margin-bottom: 2rem;
//   a {
//     border-radius: 50%;
//     border: 1px solid;
//     height: 3rem;
//     width: 3rem;
//   }
//   img {
//     height: 22px;
//     height: 1rem;
//     width: 1rem;
//     object-fit: contain;
//     padding: 0 1rem;
//     transition: filter 0.3s ease;
//   }
//   img:hover,
//   img:focus {
//     filter: brightness(50%);
//   }
// `

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 30rem;
  padding: 0 var(--padding);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background: #a786df;
  margin-top: auto;
  /* background: #5d909e; */
  /* background-color: #edf7fa; */
  color: white;
  position: relative;
  .mantra {
    text-align: center;
    p {
      font-size: 1.65rem;
    }
  }
  @media ${props => props.theme.breakpoints.mobile} {
    /* grid-column: 2 / span 6; */
  }
`

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 60%;
  margin-top: 3%;
  a {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    /* padding: 1rem; */
    /* border: 1px solid; */
    box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.5);

    border-radius: 50%;
    box-sizing: border-box;
    img {
      width: 50%;
      height: 50%;
      object-fit: contain;
    }
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    /* margin-bottom: 20%; */
  }
`

export const FooterCopyright = styled.div`
  margin-top: 2%;
  color: white;
  p {
    font-size: 1rem;
    /* filter: brightness(0.8); */
  }
  @media ${props => props.theme.breakpoints.mobile} {
    margin-top: 5%;
  }
`

export const FooterEmail = styled.div`
  transition: all 0.7s;
  position: absolute;
  bottom: 80%;
  height: 10rem;
  width: 80%;
  background: #0e172c;
  border-radius: 20px;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    width: 50%;
    font-size: 1.25rem;
    padding: 0 2%;
  }
  button {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    border: 3px solid #a786df;
    border-radius: 100px 100px;
    padding: 1% 2%;
    a {
      width: 100%;
      text-decoration: none;
      font-size: 1rem;
      color: #fff;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 1rem;
      height: 1rem;
      margin-left: 3%;
    }
  }
  @media ${props => props.theme.breakpoints.tablet} {
    width: 90%;
    padding: 0 4%;
    p {
      width: 50%;
    }
    button {
      width: 23%;
      a {
        width: 100%;
        font-size: 0.9rem;
      }
      img {
        width: 0.8rem;
        height: 0.8rem;
        margin-left: 2%;
      }
    }
  }
  @media ${props => props.theme.breakpoints.mobile} {
    min-height: 15rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2 {
      width: 100%;
    }
    p {
      margin: 3% 0;
      width: 100%;
    }
    button {
      width: 100%;
      padding: 2%;
    }
  }
`

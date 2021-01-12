import styled from "styled-components"

export const HomeHeader = styled.div`
  /* width: 90%; */
  padding: 0 var(--padding);
  height: 35rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  a:not(.brand) {
    // color: #333;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    padding: 6px 0;
    margin-right: 1rem;
    position: relative;
  }

  a:not(.brand):after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    // background: #333;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  a:hover:after {
    width: 100%;
    left: 0;
  }
  /* a:hover {
    background: ${({ theme }) => theme.hover};
  } */
  a:after {
    background: black;
  }
`

export const HomeHeaderProfileSummary = styled.div`
  // width: 50%;
  flex: 0.7;
  box-sizing: border-box;

  .intro {
    h1 {
      font-weight: 700;
      /* font-size: 3rem; */
      span {
        text-shadow: 2px 2px rgb(179, 171, 171);
      }
    }

    .summary {
      /* font-size: 1.3rem; */
      margin: 2rem 0;
    }
    .role {
      /* font-size: 1.8rem; */
      font-weight: bold;
      margin-top: 1rem;
    }
  }

  .contact__links {
    display: flex;
    font-size: 1rem;
    a {
      // color: inherit;
    }
  }
`

export const HomeHeaderAvatar = styled.div`
  flex: 0.2;
  height: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  /* width: 20rem;
  height: 20rem; */
  /* height: 30%; */
  margin-left: 5%;
  /* max-width: 26rem; */
  min-width: 18rem;
  /* max-height: 26rem; */
  min-height: 18rem;
  img {
  }
`

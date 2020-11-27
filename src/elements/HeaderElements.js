import styled from 'styled-components'

export const HomeHeader = styled.div`
  width: 90%;
  height: 28rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  // margin: ;
  .profile__summary {
    // width: 50%;
    flex: 0.8;
    box-sizing: border-box;

    .intro {
      h2 {
        font-size: 3rem;
        span {
          text-shadow: 2px 2px rgb(179, 171, 171);
          //        text-shadow:
          //     0 3px 20px red,
          //     0 0 20px red,
          // 0 0 10px orange,
          // 4px -5px 6px yellow,
          // -4px -10px 10px yellow,
          // 0 -10px 30px yellow;
          // animation: 2s Blazing infinite alternate linear;
        }
      }

      p {
        font-size: 1.5rem;
      }
    }

    .contact__links {
      display: flex;
      font-size: 1rem;
      a {
        // color: inherit;
      }
    }
  }

  .avatar {
    // max-width: 45%;
    flex: 0.2;
    height: 70%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    max-width: 26rem;
    min-width: 22rem;
    img {
      // max-width: 30rem;
      /* border-radius: 50%;
      border: 4px solid gray;
      object-fit: cover;
      height: 100%;
      width: 100%;
      max-width: 100%;
      max-height: 100%; */
    }
  }
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
    content: '';
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

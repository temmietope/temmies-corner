import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const CardWrapper = styled(props => <Link {...props} />)`
  padding: 2rem;
  height: 20rem;
  grid-gap: 3%;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  position: relative;
  transition: all 1s;
  background: #fff;
  border-radius: 7px;
  h2 {
    /* font-size: 1.8rem; */
  }
  .excerpt {
    font-size: 1.2rem;
    line-height: 2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
  small {
    min-height: 10%;
    max-height: 10%;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span:nth-child(1) {
      font-weight: bold;
    }
  }
  :hover {
    filter: brightness(1.35);
    box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.5);
  }
  ${props =>
    props.page === "allPosts" &&
    css`
      box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.4);

      /* width: 100%;
      box-sizing: border-box;
      border-radius: 12% 25% 30% 20%/50% 20% 15% 30%;

      box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
      border-left: 10px solid #a786df;
      animation: morph 8s ease-in infinite;
      padding: 5% 10%; */
      h2{
        font-size: 1.7rem;
      }
    `}
  ${props =>
    props.page === "homePage" &&
    css`
      h2 {
        min-height: 30%;
        max-height: 30%;
        font-size: 1.6rem;
      }
    `}


@keyframes morph {
    0% {
      border-radius: 12% 25% 30% 20%/50% 20% 15% 30%;
    }

    25% {
      border-radius: 15% 20% 25% 30%/40% 15% 20% 20%;
    }

    50% {
      border-radius: 20% 15% 20% 10%/30% 30% 30% 10%;
    }
    60% {
      border-radius: 17% 18% 23% 20%/35% 25% 25% 20%;
    }
    75% {
      border-radius: 15% 20% 25% 30%/40% 15% 20% 20%;
    }

    80% {
      border-radius: 15% 23% 23% 20%/43% 20% 18% 22%;
    }

    90% {
      border-radius: 15% 23% 28% 15%/45% 25% 20% 25%;
    }
    100% {
      border-radius: 13% 23% 28% 18%/48% 23% 13% 28%;
    }
  }
`

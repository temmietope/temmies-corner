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
  transition: all 0.5s;
  background: #fff;
  border-radius: 7px;
  filter: brightness(1);
  h2 {
    font-weight: 700;
    text-align: left;
  }
  .excerpt {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-align: left;
  }
  small {
    /* min-height: 10%;
    max-height: 10%;
    margin: 1rem 0; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    span:nth-child(1) {
      font-weight: bold;
    }
  }
  :hover {
    box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.5);
    transform: scale(1.02);
  }
  ${props =>
    props.page === "allPosts" &&
    css`
      height: inherit;
      box-shadow: 1px 0.5px 5px 0 rgba(0, 0, 0, 0.3);
      display: inline-block;
      margin: 0.25rem;
      /* background: #efefef; */
      box-sizing: border-box;
      /* border-radius: 12% 25% 30% 20%/50% 20% 15% 30%; */

      border-left: 10px solid #a786df;
      /* animation: morph 8s ease-in infinite; */
      padding: 5%;
      transition: 0.5s;
      h2 {
        /* font-size: 1.7rem; */
      }
      /* grid-row: ${props => (props.sec === "long" ? "1/3" : "3/4")}; */
    `}
  ${props =>
    props.page === "homePage" &&
    css`
      width: 100%;
      h2 {
        min-height: 30%;
        max-height: 30%;
        /* font-size: 1.6rem; */
      }
      @media ${props => props.theme.breakpoints.tablet} {
        padding: 4%;
      }
      @media ${props => props.theme.breakpoints.mobile} {
        padding: 3%;
        height: inherit;
        h2 {
          min-height: inherit;
          max-height: 100%;
        }
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

import styled from "styled-components"

export const StackWrapper = styled.div`
  padding: 0 var(--padding);
  width: 100%;
  /* height: 30rem; */
  height: inherit;
  margin: 5rem 0;
  h3 {
    /* font-size: 3rem; */
  }
`

export const ProjectsList = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 49%);
  grid-gap: 1rem 2%; */
  margin: 3rem 0;
`

export const Project = styled.div`
  /* box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3); */
  /* border-radius: 10px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 1s;
  cursor: pointer;
  height: inherit;
  /* margin-bottom: 2%; */

  /* display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5%;
  position: relative; */
  display: grid;
  grid-template-columns: 18% 80%;
  justify-content: space-between;
  .logo-wrapper {
    height: 100%;
    /* width: 25%; */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      object-fit: contain;
      height: 10rem;
      max-width: 100%;
      transition: all 0.8s;
    }
  }
  .project-content {
    padding: 2%;
    box-sizing: border-box;
    text-align: left;
  }
  h2 {
    /* font-size: 1.8rem; */
    margin: 1rem 0;
    font-weight: 600;
    padding: 0;
  }
  p {
    margin: 1% 0;
  }
  .stack-list {
    margin: 1% 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: auto;
    position: relative;
    p {
      margin: 1%;
      font-weight: 700;
      padding: 0 1.5%;
      position: relative;
      border-radius: 5px;
      :nth-child(1) {
        margin-left: 0;
      }
    }
  }
  .project-links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    img {
      object-fit: contain;
      width: 1.3rem;
      height: 1.3rem;
      margin: 0 1rem;
    }
  }
  :hover {
    .logo-wrapper {
      img {
        transform: rotate(2deg) scale(1.02);
      }
    }
  }

  @keyframes morph {
    0% {
      border-radius: 6% 12.5% 15% 10%/25% 10% 7.5% 15%;
    }

    25% {
      border-radius: 7.5% 10% 12.5% 15%/20% 7.5% 10% 10%;
    }

    50% {
      border-radius: 10% 7.5% 10% 5%/15% 15% 15% 5%;
    }
    60% {
      border-radius: 8.5% 9% 11.5% 10%/17.5% 12.5% 12.5% 10%;
    }
    75% {
      border-radius: 7.5% 10% 11.5% 15%/20% 7.5% 10% 10%;
    }

    80% {
      border-radius: 7.5% 11.5% 11.5% 10%/21.5% 10% 9% 11%;
    }

    90% {
      border-radius: 10% 15% 19% 9%/25% 16% 14% 15%;
    }
    100% {
      border-radius: 8% 14% 17% 11%/28% 13% 9% 17%;
    }
  }
`

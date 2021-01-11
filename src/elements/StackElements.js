import styled from "styled-components"

export const StackWrapper = styled.div`
  padding: 0 var(--padding);
  width: 100%;
  /* height: 30rem; */
  height: inherit;
  margin: 5rem 0;
  h3 {
    font-size: 3rem;
  }
`

export const ProjectsList = styled.div`
  /* display: flex;
border: 1px solid;
background: red; */
  display: grid;
  /* grid-template-columns: repeat(3, 32.5%); */
  grid-template-columns: repeat(2, 49%);

  grid-gap: 1rem 2%;
  margin: 3rem 0;
`

export const Project = styled.div`
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  transition: all 1s;
  cursor: pointer;

  /* :hover {
    border-radius: 6% 12.5% 15% 10%/25% 10% 7.5% 15%;
    animation: morph 8s ease-in infinite;
  } */
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5%;
  position: relative;
  .logo-wrapper {
    height: 100%;
    text-align: center;
    margin-bottom: 4%;
    height: 4rem;
    img {
      object-fit: contain;
      height: 100%;
      max-width: 35%;
    }
  }
  h4 {
    font-size: 1.8rem;
    text-align: center;
    margin: 1rem 0;
    padding: 0;
  }
  p {
    margin: 5% 0;
  }
  .stack-list {
    margin: 2% 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    margin-top: auto;
    position: relative;
    padding: 0 2%;
    /* :before {
      position: absolute;
      left: 0;
      content: "{";
      font-size: 3rem;
    }
    :after {
      position: absolute;
      right: 0;
      content: "}";
      font-size: 3rem;
    } */
    p {
      margin: 2% 1%;
      font-weight: 700;
      padding: 0 1.5%;
      position: relative;
      border-radius: 5px;
    }
    /* p:not(:last-child):after {
      position: absolute;
      right: 0;
      content: ",";
    } */
  }
  .project-links {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    /* box-shadow: 1px 1px 2px 0.5px rgba(0, 0, 0, 0.15); */
    img {
      object-fit: contain;
      width: 1.3rem;
      height: 1.3rem;
      margin: 0 1rem;
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

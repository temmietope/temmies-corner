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
  @media ${props => props.theme.breakpoints.mobile} {
    margin: 5% 0;
    margin-bottom: 10rem;
  }
`

export const Project = styled.div`
  /* box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3); */
  /* border-radius: 10px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  cursor: pointer;
  height: inherit;
  /* margin-bottom: 2%; */

  /* display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5%;
  position: relative; */
  display: grid;
  grid-template-columns: 15% 83%;
  justify-content: space-between;
  transition: all 0.5s;
  .logo-wrapper {
    height: 100%;
    /* width: 25%; */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      object-fit: contain;
      height: 5rem;
      max-width: 80%;
      transition: all 0.8s;
    }
  }
  .desc {
    padding: 3% 0;
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
    svg{
      width: 1.3rem;
      height: 1.3rem;
      margin: 0 1rem;
      path{
        fill: ${props => props.theme.paragraph};
      }
      :hover{
        filter: brightness(0.8);
      }
      
    }
  }
  :hover {
    .logo-wrapper {
      img {
        transform: rotate(2deg) scale(1.02);
      }
    }
  }
  @media ${props => props.theme.breakpoints.mobile} {
    /* display: grid;
  grid-template-columns: 15% 83%; */
    margin-bottom: 1rem;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    .logo-wrapper {
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 80%;
      }
    }
    .project-content {
      padding: 1% 0;
      margin-top: 1%;
    }
    h2 {
      margin: 0;
      margin-bottom: 1%;
    }
    .stack-list {
      margin: 1% 0;
    }
    .project-links {
      margin-top: 1%;
      img {
        width: 1rem;
        height: 1rem;
        margin: 0 1rem;
      }
    }
  }
`

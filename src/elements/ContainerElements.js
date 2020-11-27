import styled from "styled-components"

// export const ContainerWrapper = styled.div`
//   height: 100%;
//   display: grid;
//   grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
//   grid-template-rows: 7.8rem 20rem 5rem auto;
//   gap: 0 2rem;

//   @media ${props => props.theme.breakpoints.tablet} {
//     grid-template-columns: 2rem repeat(6, 1fr) 2rem;
//     grid-gap: 0 1rem;
//   }

//   @media ${props => props.theme.breakpoints.mobile} {
//     grid-template-columns: 1rem repeat(6, 1fr) 1rem;
//   }
// `

export const ContainerWrapper = styled.div`
  height: 100%;
  /* min-height: 100vh; */
  /* padding: 0 1%; */
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background: white;
  --padding: 10%;

  @media ${(props) => props.theme.breakpoints.tablet} {
    /* grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem; */
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    /* grid-template-columns: 1rem repeat(6, 1fr) 1rem; */
  }
`

import styled from 'styled-components'

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    height: 100vh;
  }

  .leftContainer {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .textLoginContainer {
      padding: 2rem 0rem;
    }
  }

  #checkbox-remember {
    margin: 2rem 0rem;
  }

  .checkboxDiv {
    margin: 5px;
    display: flex;
    gap: 10px;
  }

  .rememberDiv {
    margin: 5px;
    display: flex;
    gap: 10px;
  }
`

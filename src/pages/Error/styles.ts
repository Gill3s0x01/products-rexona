import styled from 'styled-components'

export const ContainerError = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
  }
  @media (max-width: 720px) {
    width: 90%;
  }

  h1 {
    font-size: 5rem;
    font-weight: bold;
    color: var(--text);
    margin-bottom: 1rem;
    margin: 0 auto;
    @media (max-height: 560px) {
      display: none;
    }
    @media (max-height: 480px) {
      display: none;
    }
    @media (max-width: 720px) {
      display: none;
    }
  }
`
export const Logo = styled.div`
  img {
    max-width: 200px;
    animation: error 2s;
    margin: 0 auto;
    flex-direction: column;
    @media (max-height: 560px) {
      width: 80%;
    }
    @media (max-height: 480px) {
      width: 80%;
    }
    @media (max-width: 729px) {
      width: 80%;
    }
  }

  span {
    font-size: 1rem;
    align-items: center;
    display: flex;
    justify-content: center;
    color: var(--text);
    font-weight: bold;
    margin: 0 auto;
  }

  /* animation img */
  @keyframes error {
    20%,
    80% {
      transform: translate3d(1px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-3px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 5rem;
  padding: 0 2rem;
  color: var(--text);
`

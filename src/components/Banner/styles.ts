import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 30%;
  overflow: hidden;
  margin: 0 auto;
  @media (max-width: 820px) {
    width: 100%;
    height: 30%;
    justify-content: center;
  }
`

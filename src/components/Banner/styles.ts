import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  height: 30%;
  overflow: hidden;
  @media (max-width: 820px) {
    width: 70%;
    height: 30%;
  }
`

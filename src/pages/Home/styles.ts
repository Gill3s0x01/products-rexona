import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
`

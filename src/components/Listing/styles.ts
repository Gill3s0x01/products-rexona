import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 600px;
  background-color: red;
  /* background-color: ${props => props.theme.background}; */
  color: ${props => props.theme.text};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  overflow: hidden;
`
export const Card = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid ${props => props.theme.text};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 500px;
  background-color: red;
  /* background-color: ${props => props.theme.background}; */
  color: ${props => props.theme.text};
  font-family: 'Roboto', sans-serif;
`

export const WrapName = styled.div`
  display: flex;
  font-size: 1.3rem;
  font-weight: 500;
`
export const WrapImg = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-start;
  flex-direction: column;
  height: 320px;
  .image {
    width: 100%;
    height: 300px;
  }
`

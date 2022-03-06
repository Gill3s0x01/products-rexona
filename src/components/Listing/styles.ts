import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 600px;
  background-color: var(--background);
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
  border: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 500px;
  background-color: var(--background);
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
export const ButtonModal = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WrapModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const TitleDetail = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  flex-direction: row;
  justify-content: center;
  align-items: top;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  color: var(--text-title);
`

export const WrapDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const DescriptionDetail = styled.p`
  color: var(--text);
  font-size: 1rem;
  font-weight: 300;
`
export const ImgDetails = styled.div`
  width: 100%;
  max-width: 200px;
  height: auto;
  @media (max-height: 560px) {
    display: none;
  }
  @media (max-height: 480px) {
    display: none;
  }
`
export const ButtonClosed = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  right: -45%;
  top: -10%;
  @media (max-height: 560px) {
    display: none;
  }
  @media (max-height: 480px) {
    display: none;
  }
`

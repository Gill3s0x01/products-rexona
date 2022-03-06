import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 4%;
  width: 100%;
  margin: 0 auto;
  background-color: var(--background);

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`
export const ContextButton = styled.div`
  flex-direction: row;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ButtonClear = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  padding: 8px;
  margin: 8px;
  color: #000;
  font-weight: 600;
  text-transform: capitalize;
  background-color: transparent;
  border: 4px solid transparent;
  translate: all 0.1s ease-in-out;
  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
    border-bottom: 4px solid #c5c5c5;
    font-weight: 600;
  }
  @media (max-width: 820px) {
    width: 60%;
    min-width: 20%;
  }
`
export const ButtonList = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  padding: 8px;
  margin: 8px;
  color: #000;
  font-weight: 600;
  text-transform: capitalize;
  background-color: transparent;
  border: 4px solid transparent;
  translate: all 0.1s ease-in-out;
  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
    border-bottom: 4px solid #03c6bb;
    font-weight: 600;
  }
  @media (max-width: 820px) {
    width: 60%;
    min-width: 20%;
  }
`
export const WrapBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const WrapTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: var(--shape);
  font-size: 5rem;
  font-weight: 700;
  position: absolute;
  flex: 1;
  left: 20%;
  top: -70%;
  position: relative;
  @media (max-width: 720px) {
    display: none;
  }
`
export const WrapSubImg = styled.div`
  display: flex;
  padding-top: 100px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  right: 300px;
  top: -80px;
  @media (max-width: 720px) {
    display: none;
  }
`
export const WarpDiv = styled.div`
  display: flex;
  flex: 1;
  margin-top: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  background-color: #03c6bb;
  @media (max-width: 720px) {
    display: none;
  }
`
export const WrapText = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 500px;
  color: var(--shape);
  font-size: 1.3rem;
  font-weight: 400;
  position: absolute;
  flex: 1;
  left: 20%;
  top: -60%;
  position: relative;
  @media (max-width: 720px) {
    display: none;
  }
`
export const TitleProduct = styled.h1`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 700;
  @media (max-width: 820px) {
    font-size: 1.2rem;
  }
`
export const WrapContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`

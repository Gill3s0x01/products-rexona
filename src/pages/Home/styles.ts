import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 5%;
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.background};

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`
export const ButtonList = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  padding: 8px;
  margin: 8px;
  background-color: transparent;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.text};
  translate: all 0.1s ease-in-out;
  &:hover {
    opacity: 0.8;
    box-shadow: 0 0 0.4rem 0.1rem var(--text-title);
    transform: scale(1.05);
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
  margin-top: 400px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  background-color: #1ffcab;
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

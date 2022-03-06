import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: ##fff;
    --red: #e52e40;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #4a5568;
    --shape: #e5e5e5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
  }

  //font-size: 16px (Desktop);
  html {
    @media (max-width: 1000px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-color: var(--background);	
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  border-style, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .react-modal-overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    display: flex;


  }

  .react-modal-content {
    width: 100%;
    height: 420px;
    max-width: 580px;
    background-color:#fff;
    padding: 2rem;
    position: relative;
    border-radius: 0.5rem;
    top: 9%;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    overflow: hidden;
    @media (max-height: 560px) {
      height: 70%;
      width: 90%;
    }
    @media (max-height: 480px) {
      height: 60%;
      overflow: visible;
    }
  }

`

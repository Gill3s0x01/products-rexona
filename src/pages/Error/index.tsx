import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { ContainerError, Logo, Content } from './styles'
import { Header } from '../../components/Header'

const Error: React.FC = () => {
  return (
    <ContainerError>
      <Header />
      <Content>
        <Logo>
          <img src="/notfound.png" alt="404" />
          <span>OOOPPSS!!!! Ocorreu um erro</span>
        </Logo>
        <h1>Pagina não encontrada</h1>
      </Content>
      <Link to="/">
        <FiArrowLeft />
        Voltar para Home
      </Link>
    </ContainerError>
  )
}

export default Error

import React from 'react'

import { Header } from '../../components/Header'
import { Listing } from '../../components/Listing'

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <>
      <Header />
      <Listing />
    </>
  )
}

export default Home

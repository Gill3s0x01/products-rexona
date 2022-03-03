import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Details from '../pages/Details'
import Error from '../pages/Error'

const RoutesApp: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/details" element={<Details />} />
    <Route path="/*" element={<Error />} />
  </Routes>
)

export default RoutesApp

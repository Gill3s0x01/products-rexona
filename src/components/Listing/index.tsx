import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { IListing } from '../../interfaces'

import { Container } from './styles'

interface ListingProps {
  name: string
  category: {
    id?: string
    name: string
  }
  images: {
    src: string
    alt?: string
  }
}

export const Listing = (props: ListingProps) => {
  const [item, setItems] = useState([])
  useEffect(() => {
    api.get('/data').then(response => {
      console.log(response, 'teSTET')
      setItems(response.data)
    })
  }, [])
  return (
    <Container>
      <h1>{props.name}</h1>
      <p>{props.category.name}</p>
      <p>
        {props.name} - {props.category.name}
      </p>

      <img src={props.images.src} alt={props.images.alt} />
    </Container>
  )
}

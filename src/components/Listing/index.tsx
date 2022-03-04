import React from 'react'
import { ICategory, IListing } from '../../interfaces'

import { Container } from './styles'

export const Listing = (props: IListing) => {
  const renderCategory = (category: ICategory | ICategory[]) => {
    if (Array.isArray(category)) {
      return category.map(category => <p>{category.name}</p>)
    }
    return <p>{category.name}</p>
  }

  return (
    <Container>
      <h1>{props.name}</h1>
      {renderCategory(props.category)}
      <p>{props.name}</p>
      {props.images.map(image => (
        <img src={image.src} alt={image.alt} />
      ))}
    </Container>
  )
}

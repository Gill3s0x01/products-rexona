import React from 'react'
import { CardGroup, Button, CardImg, Col } from 'react-bootstrap'
import { WrapName, WrapImg, Container, Card } from './styles'
import { ICategory, IListing } from '../../interfaces'

export const Listing = (props: IListing) => {
  const renderCategory = (category: ICategory | ICategory[]) => {
    if (Array.isArray(category)) {
      return category.map(category => <p>{category.name}</p>)
    }
    return <p>{category.name}</p>
  }

  return (
    <Container>
      <Col md={12}>
        <CardGroup>
          <Card>
            {props.images.map(image => (
              <WrapImg>
                <img src={image.src} alt={image.alt} className={'image'} />
              </WrapImg>
            ))}
            <WrapName>{props.name}</WrapName>
            <br></br>
            {renderCategory(props.category)}
          </Card>
        </CardGroup>
      </Col>
    </Container>
  )
}

import { useState } from 'react'
import { CardGroup, Col } from 'react-bootstrap'
import {
  WrapName,
  WrapImg,
  Container,
  Card,
  ButtonModal,
  WrapModal,
  TitleDetail,
  WrapDescription,
  DescriptionDetail,
  ImgDetails,
  ButtonClosed,
} from './styles'
import { ICategory, IListing } from '../../interfaces'
import Modal from 'react-modal'
import { AiOutlineClose } from 'react-icons/ai'

Modal.setAppElement('#root')

export const Listing = (props: IListing) => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const renderCategory = (category: ICategory | ICategory[]) => {
    if (Array.isArray(category)) {
      return category.map(category => <p>{category.name}</p>)
    }
    return <p>{category.name}</p>
  }

  const handleOpenModal = () => {
    setIsProductModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsProductModalOpen(false)
  }

  return (
    <Container>
      <Col md={12}>
        <CardGroup>
          <ButtonModal onClick={handleOpenModal}>
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
          </ButtonModal>
          <Modal
            isOpen={isProductModalOpen}
            onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
          >
            <WrapModal>
              <ButtonClosed onClick={handleCloseModal}>
                <AiOutlineClose color="#363f5f" size={'2em'} />
              </ButtonClosed>
              <TitleDetail>{props.name}</TitleDetail>
              <WrapDescription>
                <DescriptionDetail>{props.shortDescription}</DescriptionDetail>
                {props.images.map(image => (
                  <ImgDetails>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={'image'}
                      width="150px"
                    />
                  </ImgDetails>
                ))}
              </WrapDescription>
            </WrapModal>
          </Modal>
        </CardGroup>
      </Col>
    </Container>
  )
}

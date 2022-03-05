import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { Logo } from './styles'
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'

export const Header: React.FC = () => {
  return (
    <Navbar bg="white" expand="sm" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <Logo src="./Logo_Rexona.png" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-md-0"
            style={{
              maxHeight: '100px',
              marginLeft: '50px',
              paddingLeft: '0px',
            }}
          >
            <Nav.Link
              href="#action1"
              style={{
                fontSize: '1.2rem',
                color: '#363f5f',
                paddingLeft: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#action2"
              style={{
                fontSize: '1.2rem',
                color: '#363f5f',
                paddingLeft: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              Produtos
            </Nav.Link>
            <NavDropdown
              title="Mais"
              id="navbarScrollingDropdown"
              style={{
                fontSize: '1.2rem',
                color: '#363f5f',
                paddingLeft: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              <NavDropdown.Item href="#action3">Trabelhe aqui</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Sobre nós</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Politica de privacidade
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Promoções
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{
                borderRadius: '15px',
                border: 'solid 1px #e6e6e6',
                width: '200px',
                padding: '0.5rem',
                fontSize: '0.8rem',
                color: '#363f5f',
              }}
            />
            <Button
              variant="outline-dark"
              style={{
                borderRadius: '50%',
                border: 'none',
              }}
            >
              <BiSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

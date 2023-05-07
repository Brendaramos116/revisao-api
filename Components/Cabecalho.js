import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
    return (
        <>
            <Navbar bg="success" expand="lg">
                <Container>
                    <Navbar.Brand href="/deputados/">Camara Legislativa</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">                            
                            <NavDropdown title="Deputados" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Deputados Federais</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Deputados Distritais
                                </NavDropdown.Item>
                                </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Cabecalho
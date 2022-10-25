import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from "../img/Logo.svg"
import Footer from './Footer'
import RedesSociales from './RedesSociales'

const Layout = () => {
    return (
        <div>
            <Navbar expand="lg" sticky="top" variant="dark">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/">
                            <img
                                src={logo}
                                width="110"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/"><a className='nav-item nav-link'><strong>Inicio</strong></a></Link>
                            <Link to="menu"><a className='nav-item nav-link'><strong>Menú</strong></a></Link>
                            <a className='nav-item nav-link' href="#contacto"><strong>Contacto</strong></a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const PageHeader = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Poke Gallery</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default PageHeader

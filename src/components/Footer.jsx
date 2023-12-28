import React from 'react';
import {Container, Navbar, NavbarBrand} from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar className="fixed-bottom link-info gradient-footer">
            <Container className="justify-content-end">
                <NavbarBrand className="text-light">sudikonda</NavbarBrand>
            </Container>
        </Navbar>
    );
};

export default Footer;
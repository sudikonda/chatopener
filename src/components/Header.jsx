import React from 'react';
import logo from '../chat.png';
import {Container, Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="text-light">
            <Container >
                <Navbar.Brand href="#">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-2 img-fluid"
                    />{' '}
                    <span className="gradient-header-text">Chat Opener</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;
import React from 'react';
import logo from '../chat.png';
import './Header.scss';
import {Container, Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Chat Opener
                </Navbar.Brand>
            </Container>
        </Navbar>

    );
};

export default Header;
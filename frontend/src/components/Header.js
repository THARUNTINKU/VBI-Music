import React from 'react';
import '../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';
import MusicHeader from './MusicHeader';

const Header = () => {
    return (
        <header>
            <Navbar bg='light' variant='primary' expand='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand href='/' style={{ color: 'grey' }}>
                        <i className='fas fa-music'></i> VBI Musiq
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Nav.Link href='/login'>
                                <i className='fas fa-user'></i> Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='py-3'>
                <MusicHeader />
            </div>
        </header>
    );
};

export default Header;

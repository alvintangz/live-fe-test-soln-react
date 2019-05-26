import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">LIVE Competition</Navbar.Brand>
                </Navbar>
            </header>
        );
    }

}

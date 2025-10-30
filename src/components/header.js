import React, { Component } from 'react';

class Header extends Component {

    componentDidMount() {
        console.log('La app se ha cargado con exito')
    };

    render() {
        return (
            <header className='header'>
                <h1>Mi Biblioteca Musical</h1>
            </header>
        );
    }
}

export default Header;

import React from 'react';
import Header from './Header';
import Calculator from './Calculator';
import Footer from './Footer';

export default class App extends React.Component {

    render() {
        return (
            <div className="main">
                <Header />
                <Calculator />
                <Footer />
            </div>
        );
    }

}

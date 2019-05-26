import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default class CalcButton extends React.Component {

    static propTypes = {
        value: PropTypes.string,
        clickHandler: PropTypes.func,
    };

    handleClick = () => {
        if(this.props.equals || this.props.clear) {
            this.props.clickHandler();
        } else {
            this.props.clickHandler(this.props.value);
        }
    }

    render() {
        let variant = 'outline-dark';
        let identifier = '';
        if(this.props.operator) {
            variant = 'outline-primary';
        } else if(this.props.equals) {
            variant = 'primary';
            identifier = 'equals';
        } else if(this.props.clear) {
            variant = 'dark';
            identifier = 'clear';
        }

        return (
            <Button variant={variant} block onClick={this.handleClick} id={identifier}>
                {this.props.value}
            </Button>
        );
    }

}

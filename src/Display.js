import React from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/FormControl';

export default class Display extends React.Component {

    static propTypes = {
        value: PropTypes.string,
    };

    handleClick(event) {
        event.target.select();
    };

    render() {
        return (
            <FormControl type="text" placeholder="Enter values for calculation." defaultValue={this.props.value} className="text-right" onClick={this.handleClick}></FormControl>
        );
    }

}

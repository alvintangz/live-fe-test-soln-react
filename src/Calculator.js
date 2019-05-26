import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Display from './Display';
import CalcButton from './CalcButton';
import './Calculator.css';

export default class Calculator extends React.Component {

    constructor() {
        super();
        this.state = {
            input: '',
            colorChange: false,
        }
    }

    handleEquals = (value) => {
        let compute = eval(this.state.input);
        if(compute === 27) {
            document.getElementById("equals").classList.add("btn-danger");
        } else {
            document.getElementById("equals").classList.remove("btn-danger");
        }

        this.setState({
            input: compute.toString(),
        });
    }

    handleClear = () => {
        this.setState({input: ''});
    }

    handleInsert = (value) => {
        const operators = ['+', '-', '/', '*'];
        if(!operators.includes(this.state.input[this.state.input.length-1])) {
            this.setState({input: this.state.input + value});
        }
        if(!operators.includes(value)) {
            this.setState({input: this.state.input + value});
        }
    }

    render() {

        return (
            <main>
                <Container className="p-5" id="calculator">
                    <Row>
                        <Col>
                            <h1>Calculator</h1>
                            <p>The calculator below follows the project requirements listed <a href="/instructions.pdf" download>here</a>.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Display value={this.state.input} />
                        </Col>
                    </Row>
                    <Row className="pt-3">
                        <Col>
                            <CalcButton value="7" clickHandler={this.handleInsert} />
                        </Col>
                        <Col>
                            <CalcButton value="8" clickHandler={this.handleInsert} />
                        </Col>
                        <Col>
                            <CalcButton value="9" clickHandler={this.handleInsert} />
                        </Col>
                        <Col>
                            <CalcButton value="/" clickHandler={this.handleInsert} operator />
                        </Col>
                    </Row>
                    <Row className="pt-3">
                        <Col>
                            <CalcButton value="4" clickHandler={this.handleInsert} />
                        </Col>
                        <Col>
                            <CalcButton value="5" clickHandler={this.handleInsert} />
                        </Col>
                        <Col>
                            <CalcButton value="6" clickHandler={this.handleInsert} />
                        </Col>
                        <Col>
                            <CalcButton value="*" clickHandler={this.handleInsert} operator />
                        </Col>
                    </Row>
                    <Row className="pt-3">
                        <Col>
                            <CalcButton value="1" clickHandler={this.handleInsert} />
                        </Col>
                        <Col>
                            <CalcButton value="2" clickHandler={this.handleInsert} />
                        </Col>
                        <Col>
                            <CalcButton value="3" clickHandler={this.handleInsert} />
                        </Col>
                        <Col>
                            <CalcButton value="-" clickHandler={this.handleInsert} operator />
                        </Col>
                    </Row>
                    <Row className="pt-3">
                        <Col>
                            <CalcButton value="0" clickHandler={this.handleInsert} />
                        </Col>
                        <Col>
                            <CalcButton value="C" clickHandler={this.handleClear} clear />
                        </Col>
                        <Col>
                            <CalcButton value="=" clickHandler={this.handleEquals} equals />
                        </Col>
                        <Col>
                            <CalcButton value="+" clickHandler={this.handleInsert} operator />
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }

}

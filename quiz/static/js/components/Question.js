import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Question extends Component {
	constructor () {
		super()
		this.state = { isButtonActive: false }
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(event) {
		const currentState = this.state.isButtonActive;
        this.setState({ isButtonActive: !currentState });
	}
	render() {
		return (
			<div>
			<img src={this.props.image} />
			<span className="hint" onClick={this.handleClick} >
			<span className= { this.state.isButtonActive ? "show" : "hide" }>{this.props.hint}hide</span>
			<span className= { this.state.isButtonActive ? "hide" : "show" }>show hint</span>
			</span>
			<h2 className="question">{this.props.text}</h2>
			</div>
			);
	}
}

Question.propTypes = {
	text: PropTypes.string,
	image: PropTypes.string,
	hint: PropTypes.string
};

export default Question;
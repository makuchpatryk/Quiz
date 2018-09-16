import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Question extends Component {
	constructor () {
		super()
		this.state = { isButtonActive: false }
		this.handleClick = this.handleClick.bind(this)
		this.time_counter = 5;
	}
	handleClick(event) {
		const currentState = this.state.isButtonActive;
		this.setState({ isButtonActive: !currentState });
	}
	limitTimeOut(tmp) {
		tmp.onAnswerSelected('Wrong');
		window.clearInterval(this.timeCounter);
	}
	timeSec(){
		this.refs.time.textContent = --this.time_counter;
	}
	render() {
		this.timeCounter = setInterval(() => this.timeSec(), 1000);
		setTimeout(() => this.limitTimeOut(this.props), 5000);
		return (
			<div>
			<img src={this.props.image} />
			<span className="hint" onClick={this.handleClick} >
			<span className= { this.state.isButtonActive ? "show" : "hide" }>{this.props.hint}hide</span>
			<span className= { this.state.isButtonActive ? "hide" : "show" }>show hint</span>
			<span ref="time">{this.time_counter}</span>
			</span>
			<h2 className="question">{this.props.text}</h2>
			</div>
			);
		}
	}

	Question.propTypes = {
		text: PropTypes.string,
		image: PropTypes.string,
		hint: PropTypes.string,
		OnAnswerSelected: PropTypes.func
	};

	export default Question;
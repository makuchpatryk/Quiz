import React from 'react';
import PropTypes from 'prop-types';

import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


function Quiz(props) {

	function renderAnswerOptions(key) {

		if (key.correct)
		{
			var answer_type = "Correct";
		}
		else
		{
			var answer_type = "Wrong";
		}
		return (
			<AnswerOption
			key={key.choice_text}
			answerContent={key.choice_text}
			answerType={answer_type}
			answer={props.answer}
			questionId={props.questionId}
			onAnswerSelected={props.onAnswerSelected}
			/>

			);

	}

	return (
		<ReactCSSTransitionGroup
		className="container"
		component="div"
		transitionName="fade"
		transitionEnter={false}
		transitionLeave={false}
		transitionAppear={true}
		transitionAppearTimeout={500}
		>
		<div key={props.questionId}>
		<QuestionCount
		counter={props.questionId}
		total={props.questionTotal}
		/>
		<Question content={props.question} />
		<ul className="answerOptions">
		{props.answerOptions.map(renderAnswerOptions)}
		</ul>
		</div>

		</ReactCSSTransitionGroup>



		);

	return(
		<div className="quiz">
		<QuestionCount
		counter={props.questionId}
		total={props.questionTotal}
		/>
		<Question content={props.question} />
		<ul className="answerOptions">
		{props.answerOptions.map(renderAnswerOptions)}
		</ul>
		</div>
		);
}

Quiz.propTypes = {
	answer: PropTypes.string.isRequired,
	answerOptions: PropTypes.array.isRequired,
	counter: PropTypes.number.isRequired,
	question: PropTypes.string.isRequired,
	questionId: PropTypes.number.isRequired,
	questionTotal: PropTypes.number.isRequired,
	onAnswerSelected: PropTypes.func



};

export default Quiz;
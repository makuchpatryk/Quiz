import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {
	return (
		<ReactCSSTransitionGroup
		className="container result"
		component ="div"
		transitionName="fade"
		transitionEnter={false}
      	transitionLeave={false}
		transitionAppear={true}
      	transitionAppearTimeout={500}
		>
		<div>
		You got <strong>{props.Correct}</strong> Correct answers
		and <strong>{props.Wrong}</strong> Wrongs.
		</div>
		</ReactCSSTransitionGroup>
		);
}

Result.propTypes = {
	Correct: PropTypes.number.isRequired,
	Wrong: PropTypes.number.isRequired,
};

export default Result;
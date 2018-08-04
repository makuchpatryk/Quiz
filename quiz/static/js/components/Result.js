import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {
	return (
		<ReactCSSTransitionGroup
		className="container result"
		component ="div"
		transitionName="fade"
		transitionEnterTimeout={800}
		transitionLeaveTimeout={500}
		transitionAppear
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
	Correct: PropTypes.string.isRequired,
	Wrong: PropTypes.string.isRequired,
};

export default Result;
import React, { Component } from 'react';
import update from 'react-addons-update';
import Quiz from './components/Quiz';
import Result from './components/Result';
import css from './App.css';

class App extends Component {




  constructor(props) {
    super(props);

    this.quizQuestions = [];

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Correct: 0,
        Wrong: 0
      },
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
  componentDidMount() {
    fetch(document._scd['routing']['api:questions'])
    .then(res => res.json())
    .then(
      (result) => {
        this.quizQuestions = result;
        const shuffledAnswerOptions = this.quizQuestions.map((question) => this.shuffleArray(question.choices));
        this.setState({
          question: this.quizQuestions[0].question_text,
          answerOptions: shuffledAnswerOptions[0]
        });
      },
      )

  }
  componentWillMount() {

  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < this.quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.quizQuestions[counter].question_text,
      answerOptions: this.quizQuestions[counter].choices,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    return answersCount;
  }

  setResults(result) {
    this.setState({ result: "finish" });
    this.setState({ correctCnt: result["Correct"], wrongCnt: result["Wrong"] });
  }

  renderQuiz() {
    return (
      <Quiz
      answer={this.state.answer}
      answerOptions={this.state.answerOptions}
      questionId={this.state.questionId}
      question={this.state.question}
      questionTotal={this.quizQuestions.length}
      onAnswerSelected={this.handleAnswerSelected}
      />
      );
    }

    renderResult() {
      return (
      <Result Correct={this.state.correctCnt} Wrong={this.state.wrongCnt} />
      );
    }

    render() {
      return (
      <div className="App">
      <div className="App-header">

      </div>
      {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
      );




    }

  }

  export default App;
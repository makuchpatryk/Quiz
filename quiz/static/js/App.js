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
        question: {},
        answerOptions: [],
        answer: '',
        answersCount: {
          Correct: 0,
          Wrong: 0
        },
        result: '',
        lastQuestionId: 0
      };

      this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentDidMount() {
      fetch(document._scd['routing']['api:questions'].replace(0, document._scd['test_id']))
        .then(res => res.json())
          .then(
            (result) => {

              this.quizQuestions = result;
              debugger
              const shuffledAnswerOptions = this.quizQuestions.map((question) => this.shuffleArray(question.choices));
              this.setState({
                question: this.quizQuestions[0],
                answerOptions: shuffledAnswerOptions[0]
              });
            },
            )
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
    var answer = "";

    if( event == "Wrong" )
    {
      answer = event;
    }
    else
    {
      answer = event.currentTarget.value;
    }

    if (this.state.questionId < this.quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(answer), 300);
  } else {
    setTimeout(() => this.setResults(answer), 300);
  }
}


setNextQuestion(answer) {
  const counter = this.state.counter + 1;
  const questionId = this.state.questionId + 1;
  const updatedAnswersCount = update(this.state.answersCount, {
    [answer]: {$apply: (currentValue) => currentValue + 1}
  });

  this.setState({
    counter: counter,
    questionId: questionId,
    question: this.quizQuestions[counter],
    answerOptions: this.quizQuestions[counter].choices,
    answer: '',
    answersCount: updatedAnswersCount
  });
}

getResults() {
  const answersCount = this.state.answersCount;

  return answersCount;
}

setResults(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
    [answer]: {$apply: (currentValue) => currentValue + 1}
  });
  this.setState({
    correctCnt: updatedAnswersCount["Correct"],
    wrongCnt: updatedAnswersCount["Wrong"],
    result: "finish",
  });
}

renderQuiz() {
  if( this.state.answerOptions.length == 0 ) { return; }
    return (
      <Quiz
      answer={this.state.answer}
      answerOptions={this.state.answerOptions}
      counter={this.state.counter}
      questionId={this.state.questionId}
      question={this.state.question}
      questionTotal={this.quizQuestions.length}
      onAnswerSelected={this.handleAnswerSelected}
      />
      );
    }

    renderResult() {
      if(this.state.correctCnt != null || this.state.wrongCnt != null )
      {
        return (
          <Result Correct={this.state.correctCnt} Wrong={this.state.wrongCnt} />
          );
      }
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
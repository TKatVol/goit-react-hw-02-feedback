import { Component } from 'react';
import { GiCoffeeCup } from 'react-icons/gi';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Statistics from './components/Statistics';

import './App.css';

class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleIncrementFeedback = event => {
    
    this.setState((prevState) => ({
      [event.target.textContent]: prevState[event.target.textContent] + 1
    }));

  }

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = (good, bad) => {
    const positiveFeedback = good === 0 ? good : Math.floor(good * 100 / (good + bad));
    return positiveFeedback;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(good, neutral, bad);
    const feedbackButtons = Object.keys(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(good, bad);

    return (
      <div className="App">
      <h1 className="title">CAFFE Expresso <GiCoffeeCup /></h1>

      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbackButtons}
          onLeaveFeedback={this.handleIncrementFeedback}
          />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0
          ? <Notification message="No feedback given" />
          : <Statistics good={good} neutral={neutral} bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
        }
      </Section>
      </div>
    )
  }
}

export default App;

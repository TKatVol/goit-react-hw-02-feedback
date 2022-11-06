import React from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  feedbackCounter = event => {
    this.setState((prevState) => ({
      [event.target.innerText]: prevState[event.target.innerText] + 1
    }))
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = this.state;

    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage =  good === 0 ? 0 : Math.round(good*100/countTotalFeedback);
    
    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.feedbackCounter} />
      </Section>
      
      <Section title="Statistics"> 
        {countTotalFeedback === 0  
          ? <Notification message="There is no feedback"/>
          : <Statistics good={good} neutral={neutral} bad={bad}
              total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} />
          }
      </Section>
      </>
    );
  }
};

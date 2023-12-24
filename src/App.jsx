import { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  onLeaveFeedback = event => {
    const buttonName = event.target.name;
    this.setState(prev => ({ [buttonName]: prev[buttonName] + 1 }));
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const totalFeedback = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback!">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={['good', 'neutral', 'bad']}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
export default App;

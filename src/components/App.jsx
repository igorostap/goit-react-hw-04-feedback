import { useState} from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export function App(){
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
const countTotalFeedback = () => {
    return good + neutral + bad;
};
  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);
  const onFeedbackHandle = evt => {
     switch (evt.currentTarget.name) {
      case "good":
        setGood(prev => prev + 1);
        break;
      case "neutral":
        setNeutral(prev => prev + 1);
        break;
      case "bad":
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };
   const btns = ["good", "neutral", "bad"];
   return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={btns}
            onLeaveFeedback={onFeedbackHandle}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positiveFeedbackPerc={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
}

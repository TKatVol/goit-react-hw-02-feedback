import Proptypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
       
    return (
        <div>
            {options.map(option => {
                return (
                    <button type="button" key={option} className={s.feedbackBtn} onClick={onLeaveFeedback}>{option}</button>
                )
            })}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: Proptypes.array.isRequired,
    onLeaveFeedback: Proptypes.func.isRequired,
}

export default FeedbackOptions;
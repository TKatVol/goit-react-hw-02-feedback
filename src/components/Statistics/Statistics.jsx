import PropTypes from 'prop-types';
import { FiThumbsUp, FiMeh, FiThumbsDown } from "react-icons/fi"; 

import s from '../Statistics/Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div className={s.section}>
            <table className={s.table}>
                <thead>
                    <tr>
                        <th>Good <span ><FiThumbsUp className={s.icon } style={{color: '#ffffff', fill: 'green'}}/></span></th>
                        <th>Neutral <FiMeh className={s.icon } style={{color: '#000000', fill:'yellow'}}/></th>
                        <th>Bad <FiThumbsDown className={s.icon } style={{color: '#ffffff', fill:'red'}}/> </th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <th>{good}</th>
                        <th>{neutral}</th>
                        <th>{bad}</th>
                    </tr>
                </tbody>
                
            </table >

            <p className={s.text}>Total: {total}</p>
            <p className={s.text}>Positive feedback: {positivePercentage}%</p>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;
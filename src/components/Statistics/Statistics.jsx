import Proptypes from "prop-types";
import { StyledText } from "../Statistics/Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <StyledText>Good: {good}</StyledText>
            <StyledText>Neutral: {neutral}</StyledText>
            <StyledText>Bad: {bad}</StyledText>
            <StyledText>Total: {total}</StyledText>
            <StyledText>Positive Feedback: {positivePercentage}%</StyledText>
        </>
    )
};

Statistics.propTypes = {
    good: Proptypes.number.isRequired,
    neutral: Proptypes.number.isRequired,
    bad: Proptypes.number.isRequired,
    total: Proptypes.number.isRequired,
    positivePercentage: Proptypes.number.isRequired,
};
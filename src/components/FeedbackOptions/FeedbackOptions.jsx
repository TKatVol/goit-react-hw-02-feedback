import Proptypes from "prop-types";
import { List, Item, StyledButton } from "../FeedbackOptions/FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    const labels = Object.keys(options);
    
    return (
        <List>
            {labels.map(label => {
                return (
                    <Item key={label}>
                        <StyledButton type="button" onClick={onLeaveFeedback}>{label}</StyledButton>
                    </Item>
                )
            })}
        </List>
    )
};

FeedbackOptions.propTypes = {
    options: Proptypes.object.isRequired,
    onLeaveFeedback: Proptypes.func.isRequired,
};
import Proptypes from "prop-types";
import { Message } from "../Notification/Notification.styled";

export const Notification = ({ message }) => {
    return <Message>{message}</Message>
};

Notification.propTypes = {
    message: Proptypes.string.isRequired,
};
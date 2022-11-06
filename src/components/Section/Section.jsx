import Proptypes from "prop-types";
import { Container, Title } from "../Section/Section.styled";

export const Section = ({ title, children }) => {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    )
};

Section.propTypes = {
    title: Proptypes.string.isRequired,
    children: Proptypes.element,
};
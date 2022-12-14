import { Component } from "react";
import PropTypes from 'prop-types';
import { ButtonStyled } from "./Button.styled";


export class Button extends Component {

    render() {

        return (
            <ButtonStyled onClick={this.props.onClick}>Load more...</ButtonStyled>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}
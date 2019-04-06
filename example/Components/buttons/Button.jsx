import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';
import '../base.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  .label{
    color: ${props => props.labelColor || colors.defaultInputLabel};
    font-size: .8rem;
    text-align: left;
    font-weight: bold;
    margin: .2rem;
  }
`

const ButtonFlexContainer = styled.button`
  display: flex;
  flex: 1;
  margin: ${props => props.noGap ? 'none' : '.2rem'};
  padding: .2rem;
  opacity: ${props => props.isDisabled ? '.7' : '1'};
  pointer-events: ${props => props.isDisabled ? 'none' : 'all'};
  justify-content: center;
  border: ${props => props.borderColor ? '1px solid' + props.borderColor : 'none'};
  border-radius: ${props => props.noGap ? 'none' : '.2rem'};
  font-size: .8rem;
  color: ${props => props.backgroundColor || colors.defaultButtonTextColor};
  background-color: ${props => props.isError ? colors.errorColor : props.isWarning ? colors.warningColor : props.isSuccess ? colors.successColor : props.backgroundColor || colors.defaultButtonBackground};
  transition: .2s all;
  &:hover{
  cursor: pointer;
  background-color: ${ props => props.hoverColor || colors.defaultButtonHoverColor};
  color: ${ props => props.hoverTextColor || colors.defaultButtonHoverTextColor};
  }
`

class Button extends Component {
  render() {
    const { borderColor, backgroundColor, hoverColor, textColor, hoverTextColor, onClick, isDisabled, label, isError, isWarning, isSuccess, noGap } = this.props;
    return (
      <Wrapper>
        {label ? (<div className="label">{label || ''}</div>) : null}
        <ButtonFlexContainer onClick={onClick} borderColor={borderColor} backgroundColor={backgroundColor} isError={isError} isWarning={isWarning} isSuccess={isSuccess} hoverColor={hoverColor} textColor={textColor} hoverTextColor={hoverTextColor} isDisabled={isDisabled} noGap={noGap} >
          {this.props.children}
        </ButtonFlexContainer>
      </Wrapper>
    )
  }
}

export default Button
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';
import '../base.css';

const TagFlexContainer = styled.div`
  padding: .2rem;
  text-align: center;
  opacity: ${props => props.isDisabled ? '.7' : '1'};
  pointer-events: ${props => props.isDisabled ? 'none' : 'all'};
  justify-content: center;
  border-radius: ${props => props.noGap ? 'none' : '.2rem'};
  font-size: .5rem;
  color: ${props => props.backgroundColor || colors.defaultButtonTextColor};
  background-color: ${props => props.isError ? colors.errorColor : props.isWarning ? colors.warningColor : props.isSuccess ? colors.successColor : props.backgroundColor || colors.defaultButtonBackground};
`

class Tag extends Component {
  render() {
    const { borderColor, backgroundColor, hoverColor, textColor, hoverTextColor, isDisabled, isError, isWarning, isSuccess, noGap } = this.props;
    return (
      <TagFlexContainer borderColor={borderColor} backgroundColor={backgroundColor} isError={isError} isWarning={isWarning} isSuccess={isSuccess} hoverColor={hoverColor} textColor={textColor} hoverTextColor={hoverTextColor} isDisabled={isDisabled} noGap={noGap} >
        {this.props.children}
      </TagFlexContainer>
    )
  }
}

export default Tag
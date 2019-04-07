import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from './constants';
import './base.css';

const CardFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: .4rem;
  margin: .4rem;
  flex: ${props => props.cardSize || '1'};
  border: 1px solid ${props => props.borderColor || colors.defaultCardBorder};
  border-radius: .2rem;
  font-size: .8rem;
  color: ${props => props.textColor || colors.defaultCardTextColor};
  background-color: ${props => props.backgroundColor || colors.defaultCardBackground};
  box-shadow: ${props => props.noShadow ? 'none' : '0px 1px 4px 1px rgba(105,105,105,0.63)'};
`

class Card extends Component {
  render() {
    const { borderColor, backgroundColor, textColor, cardSize, noShadow } = this.props;
    return (
      <CardFlexContainer cardSize={cardSize} borderColor={borderColor} backgroundColor={backgroundColor} textColor={textColor} noShadow={noShadow}>
        {this.props.children}
      </ CardFlexContainer>
    )
  }
}

export default Card
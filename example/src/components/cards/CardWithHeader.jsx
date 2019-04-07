import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';
import '../base.css';

const CardFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: .2rem;
  margin: .2rem;
  flex: ${props => props.cardSize || '1'};
  height: 100%;
  border: 1px solid ${props => props.borderColor || colors.defaultCardBorder};
  border-radius: .2rem;
  font-size: .8rem;
  color: ${props => props.textColor || colors.defaultCardTextColor};
  background-color: ${props => props.backgroundColor || colors.defaultCardBackground};
  box-shadow: ${props => props.noShadow ? 'none' : '0px 1px 4px 1px rgba(105,105,105,0.63)'};
  .header{
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: .2rem;
    color: ${props => props.textColor || colors.defaultCardHeaderTextColor};
    background-color: ${props => props.headerColor || colors.defaultCardHeaderColor};
  }
`

class CardWithHeader extends Component {
  render() {
    const { cardSize, borderColor, backgroundColor, textColor, title, headerColor, noShadow } = this.props;
    return (
      <CardFlexContainer cardSize={cardSize} borderColor={borderColor} backgroundColor={backgroundColor} textColor={textColor} headerColor={headerColor} noShadow={noShadow}>
        <div className='header'>{title || 'Header Title'}</div>
        {this.props.children}
      </ CardFlexContainer>
    )
  }
}

export default CardWithHeader
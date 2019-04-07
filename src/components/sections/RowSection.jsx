import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';
import '../base.css';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: ${props => props.ratio || '1'};
  height: 100%;
  overflow: auto;
  align-content: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor || 'inherit'};
  color: ${props => props.textColor || 'inherit'};
  margin: ${props => props.sectionMargin ? props.sectionMargin + 'px' : '0px'};
`

class RowSection extends Component {
  render() {
    const { backgroundColor, sectionMargin, ratio, textColor } = this.props;
    return (
      <FlexContainer backgroundColor={backgroundColor} sectionMargin={sectionMargin} ratio={ratio} textColor={textColor}>
        {this.props.children}
      </FlexContainer>
    )
  }
}

export default RowSection;
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';
import '../base.css';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.ratio || '1'};
  height: 100%;
  overflow: auto;
  margin: ${props => props.sectionMargin ? props.sectionMargin + 'px' : '0px'};
  background-color: ${props => props.backgroundColor || 'inherit'};
  color: ${props => props.textColor || 'inherit'};
`

class ColumnSection extends Component {
  render() {
    const { backgroundColor, ratio, sectionMargin, textColor } = this.props;
    return (
      <FlexContainer backgroundColor={backgroundColor} ratio={ratio} sectionMargin={sectionMargin} textColor={textColor}>
        {this.props.children}
      </FlexContainer>
    )
  }
}

export default ColumnSection;
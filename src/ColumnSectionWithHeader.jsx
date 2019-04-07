import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from './constants';
import './base.css';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.ratio || '1'};
  height: 100%;
  overflow: auto;
  background-color: ${props => props.backgroundColor || 'inherit'};
  margin: ${props => props.sectionMargin ? props.sectionMargin + 'px' : '0px'};
`
const Header = styled.div`
  padding: .2rem;
  margin: .2rem;
  text-align: left;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${props => props.titleColor || colors.defaultSectionTextColor};
  background-color: ${props => props.headerColor || colors.defaultSectionHeaderColor};
`

class ColumnSectionWithHeader extends Component {
  render() {
    const { title, backgroundColor, headerColor, titleColor, ratio, sectionMargin } = this.props;
    return (
      <FlexContainer backgroundColor={backgroundColor} ratio={ratio} sectionMargin={sectionMargin}>
        <Header titleColor={titleColor} headerColor={headerColor}>{title || "Column Title"}</Header>
        <FlexContainer>
          {this.props.children}
        </FlexContainer>
      </FlexContainer>

    )
  }
}

export default ColumnSectionWithHeader
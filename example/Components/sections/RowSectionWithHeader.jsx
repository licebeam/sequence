import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';
import '../base.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.ratio || '1'};
  height: 100%;
  overflow: auto;
  background-color: ${props => props.backgroundColor || 'inherit'};
  margin: ${props => props.sectionMargin ? props.sectionMargin + 'px' : '0px'};
`
const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
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

class RowSectionWithHeader extends Component {
  render() {
    const { title, backgroundColor, headerColor, titleColor, sectionMargin, ratio } = this.props;
    return (
      <Wrapper backgroundColor={backgroundColor} sectionMargin={sectionMargin} ratio={ratio}>
        <Header titleColor={titleColor} headerColor={headerColor}>{title || "Row Title"}</Header>
        <FlexContainer>
          {this.props.children}
        </FlexContainer>
      </Wrapper>

    )
  }
}

export default RowSectionWithHeader
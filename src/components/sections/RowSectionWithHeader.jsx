import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import "../../base.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.ratio || "1"};
  height: 100%;
  align-content: center;
  justify-content: center;
  overflow: auto;
  background-color: ${props => props.backgroundColor || "inherit"};
  margin-top: ${props =>
    props.sectionMarginTop ? props.sectionMarginTop + "px" : "0px"};
  margin-bottom: ${props =>
    props.sectionMarginBottom ? props.sectionMarginBottom + "px" : "0px"};
  margin-left: ${props =>
    props.sectionMarginLeft ? props.sectionMarginLeft + "px" : "0px"};
  margin-right: ${props =>
    props.sectionMarginRight ? props.sectionMarginRight + "px" : "0px"};
`;
const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
`;
const Header = styled.div`
  padding: 0.2rem;
  margin: 0.2rem;
  text-align: left;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${props => props.titleColor || colors.defaultSectionTextColor};
  background-color: ${props =>
    props.headerColor || colors.defaultSectionHeaderColor};
`;

class RowSectionWithHeader extends Component {
  render() {
    const {
      title,
      backgroundColor,
      headerColor,
      titleColor,
      ratio,
      sectionMarginTop,
      sectionMarginBottom,
      sectionMarginRight,
      sectionMarginLeft
    } = this.props;
    return (
      <Wrapper
        backgroundColor={backgroundColor}
        ratio={ratio}
        sectionMarginTop={sectionMarginTop}
        sectionMarginBottom={sectionMarginBottom}
        sectionMarginRight={sectionMarginRight}
        sectionMarginLeft={sectionMarginLeft}
      >
        <Header titleColor={titleColor} headerColor={headerColor}>
          {title || "Row Title"}
        </Header>
        <FlexContainer>{this.props.children}</FlexContainer>
      </Wrapper>
    );
  }
}

export default RowSectionWithHeader;

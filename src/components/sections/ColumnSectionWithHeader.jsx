import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import "../../base.css";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.ratio || "1"};
  height: ${props => props.sectionHeight || "100%"};
  width: ${props => props.sectionWidth || "false"};
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

const Header = styled.div`
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${props => props.titleColor || colors.defaultSectionTextColor};
  background-color: ${props =>
    props.headerColor || colors.defaultSectionHeaderColor};
`;

class ColumnSectionWithHeader extends Component {
  render() {
    const {
      sectionHeight,
      sectionWidth,
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
      <FlexContainer
        sectionHeight={sectionHeight}
        sectionWidth={sectionWidth}
        backgroundColor={backgroundColor}
        ratio={ratio}
        sectionMarginTop={sectionMarginTop}
        sectionMarginBottom={sectionMarginBottom}
        sectionMarginRight={sectionMarginRight}
        sectionMarginLeft={sectionMarginLeft}
      >
        <Header titleColor={titleColor} headerColor={headerColor}>
          {title || "Column Title"}
        </Header>
        <FlexContainer>{this.props.children}</FlexContainer>
      </FlexContainer>
    );
  }
}

export default ColumnSectionWithHeader;

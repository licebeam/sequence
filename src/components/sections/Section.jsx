import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import "../../base.css";

const FlexContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: ${props => (props.isColumn ? "column" : "row")};
  flex: ${props => props.ratio || "1"};
  height: ${props => props.sectionHeight || "false"};
  width: ${props => props.sectionWidth || "false"};
  padding: ${props =>
    props.sectionPadding ? props.sectionPadding + "px" : "0px"};
  margin-top: ${props =>
    props.sectionMarginTop ? props.sectionMarginTop + "px" : "0px"};
  margin-bottom: ${props =>
    props.sectionMarginBottom ? props.sectionMarginBottom + "px" : "0px"};
  margin-left: ${props =>
    props.sectionMarginLeft ? props.sectionMarginLeft + "px" : "0px"};
  margin-right: ${props =>
    props.sectionMarginRight ? props.sectionMarginRight + "px" : "0px"};
  background-color: ${props => props.backgroundColor || "inherit"};
  color: ${props => props.textColor || "inherit"};
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
      textColor,
      ratio,
      sectionMarginTop,
      sectionMarginBottom,
      sectionMarginRight,
      sectionMarginLeft,
      isColumn
    } = this.props;
    return (
      <FlexContainer
        sectionHeight={sectionHeight}
        sectionWidth={sectionWidth}
        backgroundColor={backgroundColor}
        textColor={textColor}
        ratio={ratio}
        sectionMarginTop={sectionMarginTop}
        sectionMarginBottom={sectionMarginBottom}
        sectionMarginRight={sectionMarginRight}
        sectionMarginLeft={sectionMarginLeft}
        isColumn={isColumn}
      >
        {title ? (
          <Header titleColor={titleColor} headerColor={headerColor}>
            {title || false}
          </Header>
        ) : null}
        <FlexContainer ratio={ratio} isColumn={isColumn}>
          {this.props.children}
        </FlexContainer>
      </FlexContainer>
    );
  }
}

export default ColumnSectionWithHeader;

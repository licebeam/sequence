import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import "../../base.css";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: ${props => props.ratio || "1"};
  height: 100%;
  overflow: auto;
  align-content: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor || "inherit"};
  color: ${props => props.textColor || "inherit"};
  margin-top: ${props =>
    props.sectionMarginTop ? props.sectionMarginTop + "px" : "0px"};
  margin-bottom: ${props =>
    props.sectionMarginBottom ? props.sectionMarginBottom + "px" : "0px"};
  margin-left: ${props =>
    props.sectionMarginLeft ? props.sectionMarginLeft + "px" : "0px"};
  margin-right: ${props =>
    props.sectionMarginRight ? props.sectionMarginRight + "px" : "0px"};
`;

class RowSection extends Component {
  render() {
    const {
      backgroundColor,
      sectionMarginTop,
      sectionMarginBottom,
      sectionMarginRight,
      sectionMarginLeft,
      ratio,
      textColor
    } = this.props;
    return (
      <FlexContainer
        backgroundColor={backgroundColor}
        ratio={ratio}
        textColor={textColor}
        sectionMarginTop={sectionMarginTop}
        sectionMarginBottom={sectionMarginBottom}
        sectionMarginRight={sectionMarginRight}
        sectionMarginLeft={sectionMarginLeft}
      >
        {this.props.children}
      </FlexContainer>
    );
  }
}

export default RowSection;
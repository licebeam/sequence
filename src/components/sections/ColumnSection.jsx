import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import "../../base.css";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.ratio || "1"};
  height: ${props => props.sectionHeight || "false"};
  width: ${props => props.sectionWidth || "false"};
  overflow: ${props => props.overlow || "hidden"};
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

class ColumnSection extends Component {
  render() {
    const {
      sectionHeight,
      sectionWidth,
      overflow,
      backgroundColor,
      ratio,
      sectionMarginTop,
      sectionMarginBottom,
      sectionMarginRight,
      sectionMarginLeft,
      sectionPadding,
      textColor
    } = this.props;
    return (
      <FlexContainer
        sectionHeight={sectionHeight}
        sectionWidth={sectionWidth}
        backgroundColor={backgroundColor}
        overflow={overflow}
        ratio={ratio}
        sectionMarginTop={sectionMarginTop}
        sectionMarginBottom={sectionMarginBottom}
        sectionMarginRight={sectionMarginRight}
        sectionMarginLeft={sectionMarginLeft}
        sectionPadding={sectionPadding}
        textColor={textColor}
      >
        {this.props.children}
      </FlexContainer>
    );
  }
}

export default ColumnSection;

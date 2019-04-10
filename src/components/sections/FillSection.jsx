import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import "../../base.css";

const FillContainer = styled.div`
  display: flex;
  height: ${props => props.sectionHeight || "100%"};
  width: ${props => props.sectionWidth || "100%"};
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

class FillSection extends Component {
  render() {
    const {
      sectionHeight,
      sectionWidth,
      backgroundColor,
      sectionMarginTop,
      sectionMarginBottom,
      sectionMarginRight,
      sectionMarginLeft,
      sectionPadding,
      textColor
    } = this.props;
    return (
      <FillContainer
        sectionHeight={sectionHeight}
        sectionWidth={sectionWidth}
        backgroundColor={backgroundColor}
        sectionMarginTop={sectionMarginTop}
        sectionMarginBottom={sectionMarginBottom}
        sectionMarginRight={sectionMarginRight}
        sectionMarginLeft={sectionMarginLeft}
        sectionPadding={sectionPadding}
        textColor={textColor}
      >
        {this.props.children}
      </FillContainer>
    );
  }
}

export default FillSection;

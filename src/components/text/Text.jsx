import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import "../../base.css";

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: ${props => (props.isCenter ? "center" : "false")};
  text-align: ${props => (props.isCenter ? "center" : "false")};
  justify-content: ${props => (props.isCenter ? "center" : "false")};
  height: 100%;
  width: 100%;
  flex: ${props => props.ratio || "1"};
  font-size: ${props => (props.textSize ? props.textSize + "rem" : ".8rem")};
  font-weight: ${props => (props.isBold ? "bold" : "normal")};
  background-color: ${props => props.backgroundColor || "inherit"};
  color: ${props => props.textColor || "inherit"};
  padding: ${props => (props.textPadding ? props.textPadding + "px" : "0px")};
  margin-top: ${props =>
    props.textMarginTop ? props.textMarginTop + "px" : "0px"};
  margin-bottom: ${props =>
    props.textMarginBottom ? props.textMarginBottom + "px" : "0px"};
  margin-left: ${props =>
    props.textMarginLeft ? props.textMarginLeft + "px" : "0px"};
  margin-right: ${props =>
    props.textMarginRight ? props.textMarginRight + "px" : "0px"};
`;

class Text extends Component {
  render() {
    const {
      backgroundColor,
      ratio,
      textColor,
      textSize,
      isBold,
      isCenter,
      textMarginTop,
      textMarginBottom,
      textMarginRight,
      textMarginLeft,
      textPadding
    } = this.props;
    return (
      <TextContainer
        backgroundColor={backgroundColor}
        textMarginTop={textMarginTop}
        textMarginBottom={textMarginBottom}
        textMarginRight={textMarginRight}
        textMarginLeft={textMarginLeft}
        textPadding={textPadding}
        ratio={ratio}
        textColor={textColor}
        textSize={textSize}
        isBold={isBold}
        isCenter={isCenter}
      >
        {this.props.children}
      </TextContainer>
    );
  }
}

export default Text;

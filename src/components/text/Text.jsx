import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import "../../base.css";

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-self: ${props => (props.isCenter ? "center" : "false")};
  text-align: ${props => (props.isCenter ? "center" : "false")};
  justify-content: ${props => (props.isCenter ? "center" : "false")};
  flex: ${props => props.ratio || "1"};
  height: 100%;
  overflow: auto;
  font-size: ${props => (props.textSize ? props.textSize + "rem" : ".8rem")};
  font-weight: ${props => (props.isBold ? "bold" : "normal")};
  background-color: ${props => props.backgroundColor || "inherit"};
  color: ${props => props.textColor || "inherit"};
  margin: ${props =>
    props.sectionMargin ? props.sectionMargin + "px" : "0px"};
`;

class Text extends Component {
  render() {
    const {
      backgroundColor,
      sectionMargin,
      ratio,
      textColor,
      textSize,
      isBold,
      isCenter
    } = this.props;
    return (
      <TextContainer
        backgroundColor={backgroundColor}
        sectionMargin={sectionMargin}
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

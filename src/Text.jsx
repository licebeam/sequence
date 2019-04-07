import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "./constants";
import "./base.css";

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: ${props => props.ratio || "1"};
  height: 100%;
  overflow: auto;
  align-content: center;
  justify-content: center;
  font-size: ${props => (props.textSize ? props.textSize + "rem" : "1rem")};
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
      textSize
    } = this.props;
    return (
      <TextContainer
        backgroundColor={backgroundColor}
        sectionMargin={sectionMargin}
        ratio={ratio}
        textColor={textColor}
      >
        {this.props.children}
      </TextContainer>
    );
  }
}

export default Text;

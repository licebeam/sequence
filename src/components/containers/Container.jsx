import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import "../../base.css";

const FlexContainer = styled.div`
  margin: 0 auto;
  width: ${props => props.bodyWidth || "100vw"};
  height: 100vh;
  overflow: hidden;
  background-color: ${props =>
    props.backgroundColor || colors.defaultContainerColor};
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

class Container extends Component {
  render() {
    const { backgroundColor, bodyWidth } = this.props;
    return (
      <FlexContainer backgroundColor={backgroundColor} bodyWidth={bodyWidth}>
        {this.props.children}
      </FlexContainer>
    );
  }
}

export default Container;

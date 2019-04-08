import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../../constants";
import "../../base.css";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${props => props.bodyWidth || "70%"};
  overflow: auto;
  background-color: ${props =>
    props.backgroundColor || colors.defaultContainerColor};
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

class CenteredColumnContainer extends Component {
  render() {
    const { backgroundColor, bodyWidth } = this.props;
    return (
      <FlexContainer backgroundColor={backgroundColor} bodyWidth={bodyWidth}>
        {this.props.children}
      </FlexContainer>
    );
  }
}

export default CenteredColumnContainer;

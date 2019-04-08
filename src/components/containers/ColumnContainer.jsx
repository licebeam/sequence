import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import "../../base.css";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: ${props =>
    props.backgroundColor || colors.defaultContainerColor};
`;

class ColumnContainer extends Component {
  render() {
    const { backgroundColor } = this.props;
    return (
      <FlexContainer backgroundColor={backgroundColor}>
        {this.props.children}
      </FlexContainer>
    );
  }
}

export default ColumnContainer;

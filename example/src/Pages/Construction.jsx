import React, { Component } from "react";
import { CenteredColumnContainer, Text } from "sequence-ui";

class Construction extends Component {
  render() {
    return (
      <CenteredColumnContainer>
        <Text isBold textColor="#ffb300">
          This page is currently under construction.{" "}
        </Text>
      </CenteredColumnContainer>
    );
  }
}

export default Construction;

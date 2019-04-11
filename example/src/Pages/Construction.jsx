import React, { Component } from "react";
import { Section, Text } from "sequence-ui";

class Construction extends Component {
  render() {
    return (
      <Section isColumn>
        <Text isBold textColor="#ffb300">
          This page is currently under construction.{" "}
        </Text>
      </Section>
    );
  }
}

export default Construction;

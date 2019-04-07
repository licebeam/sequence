import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  Text,
  CenteredColumnContainer,
  ColumnSectionWithHeader
} from "sequence-ui";

class About extends Component {
  render() {
    const exampleCode = '<Text textSize="1" isBold> My Cool Text </Text>';
    return (
      <CenteredColumnContainer>
        <Text textSize="1" isBold>
          sequence-ui is a React component library built using
          styled-components.
        </Text>
        <ColumnSectionWithHeader title="Why" sectionMarginTop={40}>
          <Text textSize="1" isBold>
            The goal of sequence-ui is to Modularize components down to
            primitives and basic elements allowing developers to quickly build
            compound components.
          </Text>
          <SyntaxHighlighter wrapLines={true} language="html">
            {exampleCode}
          </SyntaxHighlighter>
        </ColumnSectionWithHeader>
      </CenteredColumnContainer>
    );
  }
}

export default About;

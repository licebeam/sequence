import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  Text,
  ColumnContainer,
  ColumnSectionWithHeader,
  ColumnSection
} from "sequence-ui";

class About extends Component {
  render() {
    const exampleCode = '<Text textSize="1" isBold> My Cool Text </Text>';
    return (
      <ColumnContainer>
        <ColumnSection
          backgroundColor="#3A8687"
          textColor="#fafafa"
          sectionPadding="20"
        >
          <Text textSize="1" isBold>
            sequence-ui is a React component library built using
            styled-components.
          </Text>
        </ColumnSection>
        <ColumnSectionWithHeader title="Why" sectionMarginTop="20">
          <ColumnSection sectionMarginBottom="20">
            <Text textSize="1">
              The goal of sequence-ui is to modularize components down to
              primitives and basic elements allowing developers to quickly build
              compounds.
            </Text>
          </ColumnSection>
          <Text textSize="1">
            All of the components in sequence-ui are built utilizing flex-box.
            This allows the compound components you build to remain mobile
            friendly.
          </Text>
          <SyntaxHighlighter wrapLines={true} language="html">
            {exampleCode}
          </SyntaxHighlighter>
        </ColumnSectionWithHeader>
      </ColumnContainer>
    );
  }
}

export default About;

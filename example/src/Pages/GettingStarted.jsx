import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  DropDown,
  Tag,
  Modal,
  ImageCircle,
  Image,
  Text,
  Button,
  CenteredColumnContainer,
  RowSection,
  Card,
  ColumnSectionWithHeader,
  ColumnSection,
  CardWithHeader,
  Input,
  RowSectionWithHeader,
  RowContainer,
  ColumnContainer
} from "sequence-ui";

class GettingStarted extends Component {
  render() {
    const exampleCode = 'import { Button } from "sequence-ui"';
    const exampleCode2 = "<Button> Example Button </Button>";
    const exampleCode3 = "<Button noGap> Example Button </Button>";
    const exampleCode4 = "<Button isError> Example Button </Button>";
    return (
      <ColumnContainer>
        <ColumnSectionWithHeader title="Getting Started" sectionMarginTop={40}>
          <Text textSize="1" isBold>
            Getting started is as simple as importing the component you want to
            use from sequence-ui.
          </Text>
          <SyntaxHighlighter wrapLines={true} language="html">
            {exampleCode}
          </SyntaxHighlighter>
          <Text textSize="1" isBold>
            Getting started is as simple as importing the component you want to
            use from sequence-ui.
          </Text>
          <SyntaxHighlighter wrapLines={true} language="html">
            {exampleCode2}
          </SyntaxHighlighter>
        </ColumnSectionWithHeader>
        <ColumnSection
          backgroundColor="#3A8687"
          textColor="#fafafa"
          sectionPadding="20"
          sectionMarginTop="20"
        >
          <Text textSize="1" isBold>
            Components come with basic props that you can pass in to change
            different attributes of a component.
          </Text>
        </ColumnSection>
        <ColumnSection sectionPadding="10">
          <Button noGap>Example Button</Button>
          <SyntaxHighlighter wrapLines={true} language="html">
            {exampleCode3}
          </SyntaxHighlighter>
          <Button isError>Example Button</Button>
          <SyntaxHighlighter wrapLines={true} language="html">
            {exampleCode4}
          </SyntaxHighlighter>
        </ColumnSection>
      </ColumnContainer>
    );
  }
}

export default GettingStarted;

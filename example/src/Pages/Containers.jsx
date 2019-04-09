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

class Containers extends Component {
  render() {
    const exampleCode = 'import { Button } from "sequence-ui"';
    return (
      <ColumnContainer>
        <ColumnSectionWithHeader title="Containers" sectionMarginTop={40}>
          <Text textSize="1" isBold>
            Containers are the basic building blocks of a react application
            using sequence-ui.
          </Text>
        </ColumnSectionWithHeader>
        <ColumnSection sectionPadding="10">
          <Button noGap>Example Button</Button>
          <SyntaxHighlighter wrapLines={true} language="html">
            {exampleCode}
          </SyntaxHighlighter>
          <Button isError>Example Button</Button>
          <SyntaxHighlighter wrapLines={true} language="html">
            {exampleCode}
          </SyntaxHighlighter>
        </ColumnSection>
        <ColumnSectionWithHeader title="Props" sectionMarginTop={20}>
          <Text textSize="1" isBold>
            Containers are the basic building blocks of a react application
            using sequence-ui.
          </Text>
        </ColumnSectionWithHeader>
      </ColumnContainer>
    );
  }
}

export default Containers;

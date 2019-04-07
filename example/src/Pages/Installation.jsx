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

class Installation extends Component {
  render() {
    const exampleCode = "yarn add sequence-ui";
    const exampleCode2 = "npm install --save sequence-ui";
    return (
      <ColumnContainer>
        <ColumnSectionWithHeader title="Installation" sectionMarginTop={40}>
          <Text textSize="1" isBold>
            Installing sequence-ui is very easy! In your project run either of
            the following commands in the terminal.
          </Text>
          <SyntaxHighlighter wrapLines={true} language="bash">
            {exampleCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter wrapLines={true} language="bash">
            {exampleCode2}
          </SyntaxHighlighter>
        </ColumnSectionWithHeader>
      </ColumnContainer>
    );
  }
}

export default Installation;

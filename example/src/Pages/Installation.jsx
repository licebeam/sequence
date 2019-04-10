import React, { Component, Fragment } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism";
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
      <Fragment>
        <ColumnSectionWithHeader title="Installation">
          <Text textSize="1" isBold>
            Installing sequence-ui is very easy! In your project run either of
            the following commands in the terminal.
          </Text>
          <SyntaxHighlighter style={hopscotch} wrapLines={true} language="bash">
            {exampleCode}
          </SyntaxHighlighter>
          <SyntaxHighlighter style={hopscotch} wrapLines={true} language="bash">
            {exampleCode2}
          </SyntaxHighlighter>
        </ColumnSectionWithHeader>
      </Fragment>
    );
  }
}

export default Installation;

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
    const exampleCode = "<RowContainer> <div>Child</div> </RowContainer>";
    return (
      <ColumnContainer>
        <ColumnSectionWithHeader title="Containers" sectionMarginTop={40}>
          <Text textSize="1" isBold>
            Containers are the basic building blocks of a react application
            using sequence-ui.
          </Text>
        </ColumnSectionWithHeader>
        <ColumnSection sectionPadding="10">
          <RowContainer backgroundColor="#DFF688">
            <ColumnSection sectionPadding="10">
              <Text textSize="1">
                Containers will automatically render their children.
              </Text>
            </ColumnSection>
          </RowContainer>
        </ColumnSection>
        <ColumnSectionWithHeader
          title="Container Components"
          sectionMarginTop={20}
        >
          <Text textSize=".8" isBold>
            <ul>
              <li>ColumnContainer</li>
              <li>RowContainer</li>
              <SyntaxHighlighter wrapLines={true} language="html">
                {exampleCode}
              </SyntaxHighlighter>
              <li>CenteredColumnContainer</li>
            </ul>
          </Text>
        </ColumnSectionWithHeader>
        <ColumnSectionWithHeader title="Props" sectionMarginTop={20}>
          <Text textSize=".8" isBold>
            <ul>
              <li>backgroundColor</li>
            </ul>
          </Text>
        </ColumnSectionWithHeader>
      </ColumnContainer>
    );
  }
}

export default Containers;

import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
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

class About extends Component {
  render() {
    const markyMark =
      '```js    <CenteredColumnContainer>\r\n        <Text textSize="1" isBold>\r\n          sequence-ui is a React component library built using\r\n          styled-components.\r\n        </Text>\r\n        <ReactMarkdown source={mark} />\r\n        <ColumnSectionWithHeader title="Why" sectionMargin={40}>\r\n          <Text textSize="1" isBold>\r\n            The goal of sequence-ui is to Modularize components down to\r\n            primitives and basic elements allowing developers to quickly build\r\n            compound components.\r\n          </Text>\r\n        </ColumnSectionWithHeader>\r\n      </CenteredColumnContainer>';
    return (
      <CenteredColumnContainer>
        <Text textSize="1" isBold>
          sequence-ui is a React component library built using
          styled-components.
        </Text>
        <ColumnSectionWithHeader title="Why" sectionMargin={40}>
          <Text textSize="1" isBold>
            The goal of sequence-ui is to Modularize components down to
            primitives and basic elements allowing developers to quickly build
            compound components.
          </Text>

          <ReactMarkdown source={markyMark} />
        </ColumnSectionWithHeader>
      </CenteredColumnContainer>
    );
  }
}

export default About;

import React, { Component } from "react";
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
    return (
      <CenteredColumnContainer>
        <ColumnSectionWithHeader title="Why">
          <Text textSize="1" isBold>
            sequence-ui is a React component library built using
            styled-components.
          </Text>
        </ColumnSectionWithHeader>
        <ColumnSectionWithHeader title="Why" sectionMargin={40}>
          <Text textSize="1" isBold>
            sequence-ui is a React component library built using
            styled-components.
          </Text>
        </ColumnSectionWithHeader>
      </CenteredColumnContainer>
    );
  }
}

export default About;

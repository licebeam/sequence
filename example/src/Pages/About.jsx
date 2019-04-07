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
        <Text textSize="1" isBold>
          sequence-ui is a React component library built using
          styled-components.
        </Text>
      </CenteredColumnContainer>
    );
  }
}

export default About;

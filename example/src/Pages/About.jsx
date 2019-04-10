import React, { Component, Fragment } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Text,
  ColumnSectionWithHeader,
  ColumnSection,
  FillSection
} from "sequence-ui";

class About extends Component {
  render() {
    const exampleCode = '<Text textSize="1" isBold> My Cool Text </Text>';
    return (
      <Fragment>
        <ColumnSection>
          <ColumnSectionWithHeader
            title="About"
            ratio="false"
            sectionMarginLeft="20"
            sectionMarginRight="20"
          >
            <FillSection textColor="#000" sectionHeight="40px">
              <Text isCenter textSize=".6" isBold>
                sequence-ui is a React component library built using
                styled-components.
              </Text>
            </FillSection>
            <Text textSize="1">
              The goal of sequence-ui is to modularize components down to
              primitives and basic elements allowing developers to quickly build
              compounds.
            </Text>
            <Text textSize="1">
              All of the components in sequence-ui are built utilizing flex-box.
              This allows the compound components you build to remain mobile
              friendly.
            </Text>
            <Text isCenter>
              <SyntaxHighlighter style={hopscotch} language="jsx">
                {exampleCode}
              </SyntaxHighlighter>
            </Text>
          </ColumnSectionWithHeader>
        </ColumnSection>
      </Fragment>
    );
  }
}

export default About;

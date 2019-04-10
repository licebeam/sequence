import React, { Component, Fragment } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Text,
  ColumnSectionWithHeader,
  ColumnSection,
  FillSection
} from "sequence-ui";

class GettingStarted extends Component {
  render() {
    const exampleCode =
      '<Container><Section type="row"><Text textSize="1" isBold> My Cool Text </Text></Section></Container>';
    return (
      <Fragment>
        <ColumnSection>
          <ColumnSectionWithHeader
            title="Getting Started"
            ratio="false"
            sectionMarginLeft="20"
            sectionMarginRight="20"
          >
            <Text textSize="1">
              The goal of sequence-ui is to modularize components down to
              primitives and basic elements allowing developers to quickly build
              compounds.
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

export default GettingStarted;

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
    const exampleCode2 = 'import { Button } from "sequence-ui"';
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
              Getting started is as simple as importing the component you want
              to use from sequence-ui.
            </Text>
            <Text isCenter>
              <SyntaxHighlighter style={hopscotch} language="jsx">
                {exampleCode2}
              </SyntaxHighlighter>
            </Text>
            <Text textSize="1">
              Heres a simple example of a compound component!
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

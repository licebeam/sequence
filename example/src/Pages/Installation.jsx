import React, { Component, Fragment } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Text, Section } from "sequence-ui";

class Installation extends Component {
  render() {
    const exampleCode = "npm install -save sequence-ui";
    const exampleCode2 = "yarn add sequence-ui";
    return (
      <Fragment>
        <Section
          isColumn
          title="Installation"
          ratio="false"
          sectionMarginLeft="20"
          sectionMarginRight="20"
        >
          <Section textColor="#000" sectionHeight="40px">
            <Text isCenter textSize=".6" isBold>
              The current version on sequence-ui is not suitable for production
              and should not be used.
            </Text>
          </Section>
          <Text textSize="1">
            Installing sequence-ui is extremely simple. Navigate to your project
            directory and in your terminal type either of the following commands
            based on your preference.
          </Text>
          <Text isCenter>
            <SyntaxHighlighter style={hopscotch} language="bash">
              {exampleCode}
            </SyntaxHighlighter>
          </Text>
          <Text isCenter>
            <SyntaxHighlighter style={hopscotch} language="bash">
              {exampleCode2}
            </SyntaxHighlighter>
          </Text>
        </Section>
      </Fragment>
    );
  }
}

export default Installation;

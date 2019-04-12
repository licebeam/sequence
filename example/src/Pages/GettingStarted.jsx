import React, { Component, Fragment } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Text, Section, Button } from "sequence-ui";

class About extends Component {
  render() {
    const exampleCode = 'import {Button} from "sequence-ui"';
    const exampleCode2 = "<Button isError> My Cool Text </Button>";
    return (
      <Fragment>
        <Section
          isColumn
          title="Getting Started"
          ratio="false"
          sectionMarginLeft="20"
          sectionMarginRight="20"
        >
          <Text textSize="1">
            Getting started is as simple as importing the component you want to
            use from sequence-ui.
          </Text>
          <SyntaxHighlighter style={hopscotch} language="jsx">
            {exampleCode}
          </SyntaxHighlighter>
          <Text textSize="1">
            Once you've got your imported component, you can pass props to it to
            change its features such as its size or flex ratio.
          </Text>
          <Text isCenter>
            <SyntaxHighlighter style={hopscotch} language="jsx">
              {exampleCode2}
            </SyntaxHighlighter>
          </Text>
          <Button isError>My Cool Button</Button>
        </Section>
      </Fragment>
    );
  }
}

export default About;

import React, { Component, Fragment } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Text, Section } from "sequence-ui";

class Containers extends Component {
  render() {
    const exampleCode = 'import {Container} from "sequence-ui"';
    const exampleCode2 = "<Container> All of my other components! </Container>";
    return (
      <Fragment>
        <Section
          isColumn
          title="Containers"
          ratio="false"
          sectionMarginLeft="20"
          sectionMarginRight="20"
        >
          <Text textSize="1">
            The container is the first building primitive of sequence-ui. The
            Container component serves as the wrapper for your webpage or
            application.
          </Text>
          <Text isCenter>
            <SyntaxHighlighter style={hopscotch} language="jsx">
              {exampleCode}
            </SyntaxHighlighter>
          </Text>
          <Text textSize="1">
            As with most other components in sequence-ui, the Container
            component will render it's children.
          </Text>
          <Text isCenter>
            <SyntaxHighlighter style={hopscotch} language="jsx">
              {exampleCode2}
            </SyntaxHighlighter>
          </Text>
        </Section>
        <Section
          isColumn
          sectionMarginLeft="20"
          sectionMarginRight="20"
          title="Props"
        >
          <ul>
            <li>bodyWidth -> String : css property IE: '80%'</li>
            <li>backgroundColor -> String</li>
          </ul>
        </Section>
      </Fragment>
    );
  }
}

export default Containers;

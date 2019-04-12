import React, { Component, Fragment } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { hopscotch } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Text, Section } from "sequence-ui";

class Sections extends Component {
  render() {
    const exampleCode = 'import {Section} from "sequence-ui"';
    const exampleCode2 =
      "<Section isColumn> All of my other components! </Section>";
    return (
      <Fragment>
        <Section
          isColumn
          title="Sections"
          ratio="false"
          sectionMarginLeft="20"
          sectionMarginRight="20"
        >
          <Text textSize="1">
            The Section Component is by far the most versatile component within
            sequence-ui. It alone can be used to create layouts and other
            compound components.
          </Text>
          <Text isCenter>
            <SyntaxHighlighter style={hopscotch} language="jsx">
              {exampleCode}
            </SyntaxHighlighter>
          </Text>
          <Text textSize="1">
            The Section Component takes advantage of the CSS flex system,
            allowing you to build complex and mobile friendly views.
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
            <li>ratio -> String or Number : css flex property IE: '1'</li>
            <li>isColumn -> Boolean: Changes the flex-direction to column</li>
            <li>backgroundColor -> String</li>
            <li>textColor -> String</li>
          </ul>
        </Section>
      </Fragment>
    );
  }
}

export default Sections;

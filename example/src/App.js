import React, { Component } from "react";
import "./index.css";
import sequenceLogo from "./images/sequence-ui-logo.gif";
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

class App extends Component {
  state = { modalOpen: false };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  render() {
    return (
      <div className="App">
        <CenteredColumnContainer>
          <RowSection>
            <ColumnSection ratio={1}>
              <Image imageURL={sequenceLogo} />
              <Text textSize="1" isBold>
                sequence-ui
              </Text>
              <ColumnSection>
                <Text>Docs</Text>
                <Button noGap>About</Button>
                <Button noGap>Installation</Button>
                <Button noGap>Getting Started</Button>
                <Text>Primitives</Text>
                <Button noGap>Containers</Button>
                <Button noGap>Sections</Button>
                <Text>Basic</Text>
                <Button noGap>Text</Button>
                <Button noGap>Images</Button>
                <Button noGap>Tags</Button>
                <Text>Interactables</Text>
                <Button noGap>Buttons</Button>
                <Button noGap>Menus</Button>
                <Button noGap>Inputs</Button>
                <Button noGap>Modals</Button>
              </ColumnSection>
            </ColumnSection>
            <ColumnSection ratio={3}>
              <Button noGap>Github</Button>
              <Button noGap>Npm</Button>
              <Button noGap>Bundle Phobia</Button>
              <ColumnSection ratio={4}>
                <Text textSize="1" isBold>
                  sequence-ui is a React component library built using
                  styled-components.
                </Text>
              </ColumnSection>
            </ColumnSection>
          </RowSection>
        </CenteredColumnContainer>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./index.css";
import sequenceLogo from "./images/sequence-ui-logo.gif";
import {
  Image,
  Text,
  Button,
  CenteredColumnContainer,
  RowSection,
  ColumnSection
} from "sequence-ui";
import About from "./Pages/About";
import Installation from "./Pages/Installation";
import GettingStarted from "./Pages/GettingStarted";
import Construction from "./Pages/Construction";

class App extends Component {
  state = { modalOpen: false, page: "about" };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  changePage = page => {
    this.setState({ page });
  };

  render() {
    return (
      <div className="App">
        <CenteredColumnContainer>
          <RowSection>
            <ColumnSection ratio={3} sectionMarginTop={20}>
              <Image imageURL={sequenceLogo} />
              <Text textSize="1" isBold>
                sequence-ui
              </Text>
            </ColumnSection>
            <ColumnSection
              ratio={6}
              sectionMarginLeft={40}
              sectionMarginRight={20}
            >
              <ColumnSection
                sectionMarginTop={20}
                backgroundColor="#E54A26"
                textColor="#fafafa"
                sectionPadding="20"
              >
                <Text textSize="1" isBold>
                  sequence-ui version 0.1.5 is currently a work in progress.
                </Text>
              </ColumnSection>
            </ColumnSection>
          </RowSection>
          <RowSection>
            <ColumnSection ratio={3}>
              <ColumnSection sectionMarginTop={20}>
                <Text>Docs</Text>
                <Button onClick={() => this.changePage("about")} noGap>
                  About
                </Button>
                <Button onClick={() => this.changePage("installation")} noGap>
                  Installation
                </Button>
                <Button
                  onClick={() => this.changePage("getting-started")}
                  noGap
                >
                  Getting Started
                </Button>
                <Text>Primitives</Text>
                <Button onClick={() => this.changePage("containers")} noGap>
                  Containers
                </Button>
                <Button onClick={() => this.changePage("sections")} noGap>
                  Sections
                </Button>
                <Text>Basic Elements</Text>
                <Button onClick={() => this.changePage("text")} noGap>
                  Text
                </Button>
                <Button onClick={() => this.changePage("images")} noGap>
                  Images
                </Button>
                <Button onClick={() => this.changePage("tags")} noGap>
                  Tags
                </Button>
                <Text>Interactables</Text>
                <Button
                  onClick={() => this.changePage("buttons")}
                  isDisabled
                  noGap
                >
                  Buttons
                </Button>
                <Button
                  onClick={() => this.changePage("menus")}
                  isDisabled
                  noGap
                >
                  Menus
                </Button>
                <Button
                  onClick={() => this.changePage("inputs")}
                  isDisabled
                  noGap
                >
                  Inputs
                </Button>
                <Button
                  onClick={() => this.changePage("modals")}
                  isDisabled
                  noGap
                >
                  Modals
                </Button>
              </ColumnSection>
            </ColumnSection>
            <ColumnSection
              ratio={6}
              sectionMarginLeft={40}
              sectionMarginRight={20}
            >
              <ColumnSection ratio={4} sectionMarginTop={20}>
                {this.state.page === "about" ? <About /> : null}
                {this.state.page === "installation" ? <Installation /> : null}
                {this.state.page === "getting-started" ? (
                  <GettingStarted />
                ) : null}
                {this.state.page === "containers" ? <Construction /> : null}
                {this.state.page === "sections" ? <Construction /> : null}
                {this.state.page === "text" ? <Construction /> : null}
                {this.state.page === "images" ? <Construction /> : null}
                {this.state.page === "tags" ? <Construction /> : null}
                {this.state.page === "buttons" ? <Construction /> : null}
                {this.state.page === "menus" ? <Construction /> : null}
                {this.state.page === "inputs" ? <Construction /> : null}
                {this.state.page === "modals" ? <Construction /> : null}
              </ColumnSection>
            </ColumnSection>
          </RowSection>
          <RowSection>
            <ColumnSection sectionMarginTop={20}>
              <Text>Thanks for checking out sequence-ui</Text>
              <RowSection>
                <a
                  target="_blank"
                  className="page-link"
                  href="https://github.com/licebeam/sequence"
                >
                  Github Repo
                </a>
                <a
                  target="_blank"
                  className="page-link"
                  href="https://www.npmjs.com/package/sequence-ui"
                >
                  NPM
                </a>
                <a
                  target="_blank"
                  className="page-link"
                  href="https://bundlephobia.com/result?p=sequence-ui@0.1.3"
                >
                  Bundle Phobia
                </a>
              </RowSection>
            </ColumnSection>
          </RowSection>
        </CenteredColumnContainer>
      </div>
    );
  }
}

export default App;

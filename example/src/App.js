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
            <ColumnSection ratio={3}>
              <Image imageURL={sequenceLogo} />
              <Text textSize="1" isBold>
                sequence-ui
              </Text>
            </ColumnSection>
            <ColumnSection ratio={7} />
          </RowSection>
          <RowSection>
            <ColumnSection ratio={3}>
              <ColumnSection sectionMargin={20}>
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
                <Button onClick={() => this.changePage("buttons")} noGap>
                  Buttons
                </Button>
                <Button onClick={() => this.changePage("menus")} noGap>
                  Menus
                </Button>
                <Button onClick={() => this.changePage("inputs")} noGap>
                  Inputs
                </Button>
                <Button onClick={() => this.changePage("modals")} noGap>
                  Modals
                </Button>
              </ColumnSection>
            </ColumnSection>
            <ColumnSection ratio={1} />
            <ColumnSection ratio={6}>
              <ColumnSection ratio={4} sectionMargin={20}>
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
            <ColumnSection sectionMargin={20}>
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

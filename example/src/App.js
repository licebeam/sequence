import React, { Component } from "react";
import "./index.css";
import sequenceLogo from "./images/sequence-ui-logo.gif";
import {
  Image,
  Text,
  Button,
  Container,
  RowSection,
  Section
} from "sequence-ui";
import About from "./Pages/About";
import Installation from "./Pages/Installation";
import GettingStarted from "./Pages/GettingStarted";
import Construction from "./Pages/Construction";
import Containers from "./Pages/Containers";

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
        <Container bodyWidth="70%">
          <RowSection sectionHeight="20vh">
            <Section isColumn ratio={3}>
              <Image imageURL={sequenceLogo} />
              <Text isCenter textSize="1" isBold>
                sequence-ui
              </Text>
            </Section>
            <Section isColumn ratio={6}>
              <Section isColumn backgroundColor="#E54A26" textColor="#fafafa">
                <Text isCenter textSize=".8" isBold>
                  sequence-ui version 0.1.5 is currently a work in progress.
                </Text>
              </Section>
              <Section isColumn textColor="#fafafa" />
            </Section>
          </RowSection>
          <RowSection sectionHeight="70vh">
            <Section isColumn ratio={3}>
              <Section isColumn backgroundColor="#3A8687">
                <Button onClick={() => this.changePage("about")} noGap>
                  <Text isCenter textSize="1" isBold>
                    About
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("installation")} noGap>
                  <Text isCenter textSize="1" isBold>
                    Installation
                  </Text>
                </Button>
                <Button
                  onClick={() => this.changePage("getting-started")}
                  noGap
                >
                  <Text isCenter textSize="1" isBold>
                    Getting Started
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("containers")} noGap>
                  <Text isCenter textSize="1" isBold>
                    Containers
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("sections")} noGap>
                  <Text isCenter textSize="1" isBold>
                    Sections
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("text")} noGap>
                  <Text isCenter textSize="1" isBold>
                    Text
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("images")} noGap>
                  <Text isCenter textSize="1" isBold>
                    Images
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("tags")} noGap>
                  <Text isCenter textSize="1" isBold>
                    Tags
                  </Text>
                </Button>
                <Button
                  onClick={() => this.changePage("buttons")}
                  isDisabled
                  noGap
                >
                  <Text isCenter textSize="1" isBold>
                    Buttons
                  </Text>
                </Button>
                <Button
                  onClick={() => this.changePage("menus")}
                  isDisabled
                  noGap
                >
                  <Text isCenter textSize="1" isBold>
                    Menus
                  </Text>
                </Button>
                <Button
                  onClick={() => this.changePage("inputs")}
                  isDisabled
                  noGap
                >
                  <Text isCenter textSize="1" isBold>
                    Inputs
                  </Text>
                </Button>
                <Button
                  onClick={() => this.changePage("modals")}
                  isDisabled
                  noGap
                >
                  <Text isCenter textSize="1" isBold>
                    Modals
                  </Text>
                </Button>
              </Section>
            </Section>
            <Section isColumn ratio={6}>
              <Section isColumn>
                {this.state.page === "about" ? <About /> : null}
                {this.state.page === "installation" ? <Installation /> : null}
                {this.state.page === "getting-started" ? (
                  <GettingStarted />
                ) : null}
                {this.state.page === "containers" ? <Containers /> : null}
                {this.state.page === "sections" ? <Construction /> : null}
                {this.state.page === "text" ? <Construction /> : null}
                {this.state.page === "images" ? <Construction /> : null}
                {this.state.page === "tags" ? <Construction /> : null}
                {this.state.page === "buttons" ? <Construction /> : null}
                {this.state.page === "menus" ? <Construction /> : null}
                {this.state.page === "inputs" ? <Construction /> : null}
                {this.state.page === "modals" ? <Construction /> : null}
              </Section>
            </Section>
          </RowSection>
          <RowSection sectionHeight="10vh">
            <Section isColumn>
              <RowSection>
                <Text isCenter>
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
                </Text>
              </RowSection>
            </Section>
          </RowSection>
        </Container>
      </div>
    );
  }
}

export default App;

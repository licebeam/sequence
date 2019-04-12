import React, { Component } from "react";
import "./index.css";
import sequenceLogo from "./images/sequence-ui-logo.gif";
import { Image, Text, Button, Container, Section } from "sequence-ui";
import About from "./Pages/About";
import Installation from "./Pages/Installation";
import GettingStarted from "./Pages/GettingStarted";
import Construction from "./Pages/Construction";
import Containers from "./Pages/Containers";
import Sections from "./Pages/Sections";
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
        <Container bodyWidth="80%">
          <Section sectionHeight="10vh">
            <Section isColumn ratio={2} sectionMarginTop="5">
              <Image imageURL={sequenceLogo} imageHeight="50" imageWidth="50" />
              <Text isCenter textSize=".6" isBold>
                sequence-ui
              </Text>
            </Section>
            <Section isColumn ratio={8}>
              <Section
                sectionMarginTop="5"
                sectionMarginLeft="20"
                sectionMarginRight="20"
                ratio="false"
                isColumn
                backgroundColor="#E54A26"
                textColor="#fafafa"
              >
                <Text isCenter textSize=".8" isBold>
                  sequence-ui version 0.1.6 is currently a work in progress.
                </Text>
              </Section>
            </Section>
          </Section>
          <Section sectionHeight="80vh">
            <Section isColumn ratio={2}>
              <Section isColumn backgroundColor="#3A8687">
                <Button onClick={() => this.changePage("about")} noGap>
                  <Text isCenter textSize=".6" isBold>
                    About
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("installation")} noGap>
                  <Text isCenter textSize=".6" isBold>
                    Installation
                  </Text>
                </Button>
                <Button
                  onClick={() => this.changePage("getting-started")}
                  noGap
                >
                  <Text isCenter textSize=".6" isBold>
                    Getting Started
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("containers")} noGap>
                  <Text isCenter textSize=".6" isBold>
                    Containers
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("sections")} noGap>
                  <Text isCenter textSize=".6" isBold>
                    Sections
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("text")} noGap>
                  <Text isCenter textSize=".6" isBold>
                    Text
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("images")} noGap>
                  <Text isCenter textSize=".6" isBold>
                    Images
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("tags")} noGap>
                  <Text isCenter textSize=".6" isBold>
                    Tags
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("buttons")} noGap>
                  <Text isCenter textSize=".6" isBold>
                    Buttons
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("menus")} noGap>
                  <Text isCenter textSize=".6" isBold>
                    Menus
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("inputs")} noGap>
                  <Text isCenter textSize=".6" isBold>
                    Inputs
                  </Text>
                </Button>
                <Button onClick={() => this.changePage("modals")} noGap>
                  <Text isCenter textSize=".6" isBold>
                    Modals
                  </Text>
                </Button>
              </Section>
            </Section>
            <Section isColumn ratio={8}>
              <Section isColumn ratio="false">
                {this.state.page === "about" ? <About /> : null}
                {this.state.page === "installation" ? <Installation /> : null}
                {this.state.page === "getting-started" ? (
                  <GettingStarted />
                ) : null}
                {this.state.page === "containers" ? <Containers /> : null}
                {this.state.page === "sections" ? <Sections /> : null}
                {this.state.page === "text" ? <Construction /> : null}
                {this.state.page === "images" ? <Construction /> : null}
                {this.state.page === "tags" ? <Construction /> : null}
                {this.state.page === "buttons" ? <Construction /> : null}
                {this.state.page === "menus" ? <Construction /> : null}
                {this.state.page === "inputs" ? <Construction /> : null}
                {this.state.page === "modals" ? <Construction /> : null}
              </Section>
            </Section>
          </Section>
          <Section sectionHeight="10vh">
            <Section isColumn>
              <Section>
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
              </Section>
            </Section>
          </Section>
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { Link, BrowserRouter } from "react-router-dom";
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
import About from "./Pages/About";
import Installation from "./Pages/Installation";
import GettingStarted from "./Pages/GettingStarted";
import Construction from "./Pages/Construction";

class App extends Component {
  state = { modalOpen: false };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  render() {
    return (
      <BrowserRouter>
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
                  <Link to="/sequence">
                    <Button noGap>About</Button>
                  </Link>
                  <Link to="/sequence/install">
                    <Button noGap>Installation</Button>
                  </Link>
                  <Link to="/sequence/start">
                    <Button noGap>Getting Started</Button>
                  </Link>
                  <Text>Primitives</Text>
                  <Link to="/sequence/containers">
                    <Button noGap>Containers</Button>
                  </Link>
                  <Link to="/sequence/sections">
                    <Button noGap>Sections</Button>
                  </Link>
                  <Text>Basic Elements</Text>
                  <Link to="/sequence/text">
                    <Button noGap>Text</Button>
                  </Link>
                  <Link to="/sequence/images">
                    <Button noGap>Images</Button>
                  </Link>
                  <Link to="/sequence/tags">
                    <Button noGap>Tags</Button>
                  </Link>
                  <Text>Interactables</Text>
                  <Link to="/sequence/buttons">
                    <Button noGap>Buttons</Button>
                  </Link>
                  <Link to="/sequence/menus">
                    <Button noGap>Menus</Button>
                  </Link>
                  <Link to="/sequence/inputs">
                    <Button noGap>Inputs</Button>
                  </Link>
                  <Link to="/sequence/modals">
                    <Button noGap>Modals</Button>
                  </Link>
                </ColumnSection>
              </ColumnSection>
              <ColumnSection ratio={1} />
              <ColumnSection ratio={6}>
                <ColumnSection ratio={4} sectionMargin={20}>
                  <Switch>
                    <Route exact path="/sequence" component={About} />
                    <Route
                      exact
                      path="/sequence/install"
                      component={Installation}
                    />
                    <Route
                      exact
                      path="/sequence/start"
                      component={GettingStarted}
                    />
                    <Route
                      exact
                      path="/sequence/containers"
                      component={Construction}
                    />
                    <Route
                      exact
                      path="/sequence/sections"
                      component={Construction}
                    />
                    <Route
                      exact
                      path="/sequence/text"
                      component={Construction}
                    />
                    <Route
                      exact
                      path="/sequence/images"
                      component={Construction}
                    />
                    <Route
                      exact
                      path="/sequence/tags"
                      component={Construction}
                    />
                    <Route
                      exact
                      path="/sequence/buttons"
                      component={Construction}
                    />
                    <Route
                      exact
                      path="/sequence/menus"
                      component={Construction}
                    />
                    <Route
                      exact
                      path="/sequence/inputs"
                      component={Construction}
                    />
                    <Route
                      exact
                      path="/sequence/modals"
                      component={Construction}
                    />
                  </Switch>
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
      </BrowserRouter>
    );
  }
}

export default App;

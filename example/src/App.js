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
                  <Link to="/">
                    <Button noGap>About</Button>
                  </Link>
                  <Link to="/install">
                    <Button noGap>Installation</Button>
                  </Link>
                  <Link to="/start">
                    <Button noGap>Getting Started</Button>
                  </Link>
                  <Text>Primitives</Text>
                  <Link to="/containers">
                    <Button noGap>Containers</Button>
                  </Link>
                  <Link to="/sections">
                    <Button noGap>Sections</Button>
                  </Link>
                  <Text>Basic Elements</Text>
                  <Link to="/text">
                    <Button noGap>Text</Button>
                  </Link>
                  <Link to="/images">
                    <Button noGap>Images</Button>
                  </Link>
                  <Link to="/tags">
                    <Button noGap>Tags</Button>
                  </Link>
                  <Text>Interactables</Text>
                  <Link to="/buttons">
                    <Button noGap>Buttons</Button>
                  </Link>
                  <Link to="/menus">
                    <Button noGap>Menus</Button>
                  </Link>
                  <Link to="/inputs">
                    <Button noGap>Inputs</Button>
                  </Link>
                  <Link to="/modals">
                    <Button noGap>Modals</Button>
                  </Link>
                </ColumnSection>
              </ColumnSection>
              <ColumnSection ratio={1} />
              <ColumnSection ratio={6}>
                <ColumnSection ratio={4} sectionMargin={20}>
                  <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/install" component={Installation} />
                    <Route exact path="/start" component={GettingStarted} />
                    <Route exact path="/containers" component={Construction} />
                    <Route exact path="/sections" component={Construction} />
                    <Route exact path="/text" component={Construction} />
                    <Route exact path="/images" component={Construction} />
                    <Route exact path="/tags" component={Construction} />
                    <Route exact path="/buttons" component={Construction} />
                    <Route exact path="/menus" component={Construction} />
                    <Route exact path="/inputs" component={Construction} />
                    <Route exact path="/modals" component={Construction} />
                  </Switch>
                </ColumnSection>
              </ColumnSection>
            </RowSection>
            <RowSection>
              <ColumnSection sectionMargin={20}>
                <Text>Thanks for checking out sequence-ui</Text>
                <Button noGap>Github</Button>
                <Button noGap>Npm</Button>
                <Button noGap>Bundle Phobia</Button>
              </ColumnSection>
            </RowSection>
          </CenteredColumnContainer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

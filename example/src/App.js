import React, { Component } from 'react';
import { DropDown, Tag, Modal, ImageCircle, Image, Button, CenteredColumnContainer, RowSection, Card, ColumnSectionWithHeader, ColumnSection, CardWithHeader, Input, RowSectionWithHeader, RowContainer, ColumnContainer } from 'sequence-ui';

class App extends Component {
  state = { modalOpen: false }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  }
  render() {
    const cardCount = [[], [], []];
    return (
      <div className="App">
        <CenteredColumnContainer>
          <RowContainer>
            {this.state.modalOpen ? (
              <Modal>
                <ColumnSection ratio={4} sectionMargin={10}>
                  <Image imageURL="https://images.pexels.com/photos/1663417/pexels-photo-1663417.jpeg" imageHeight={200} imageWidth={200} />
                </ColumnSection>
                <Button onClick={() => this.toggleModal()}>Close</Button>
              </Modal>
            ) : null}
            <ColumnSection ratio={1}>
              <RowSection backgroundColor={'#34515e'} textColor={'#ffb300'}>
                <RowSection>
                  <h1>Sequence UI</h1>
                </RowSection>
              </RowSection>
              <RowSection>
                <Button isWarning noGap onClick={() => this.toggleModal()}>Details</Button>
                <Button noGap>
                  Test
                </Button>
                <Button noGap>
                  Test
                </Button>
                <Button noGap>
                  Test
                </Button>
                <Button noGap>
                  Test
                </Button>

              </RowSection>
              <DropDown onClick={(item) => console.log(item)} />
              {cardCount.map((card, i) => (
                <ColumnSectionWithHeader title='Section 1' key={i}>
                  <Card>
                    <RowSection>
                      <ColumnSection ratio={6} />
                      <Tag isSuccess>Test Tag</Tag>
                    </RowSection>
                    <Card noShadow>
                      <RowSection>
                        <ColumnSection ratio={2}>
                          <ImageCircle imageURL="https://images.pexels.com/photos/1663417/pexels-photo-1663417.jpeg" imageHeight={50} imageWidth={50} />
                          <Tag isWarning>UserName</Tag>
                        </ColumnSection>
                        <ColumnSection ratio={2} />
                        <ColumnSection ratio={6}>
                          <Card>
                            <h2>Some Stats</h2>
                            <DropDown hoverDrop onClick={(item) => console.log(item)} />
                          </Card>
                        </ColumnSection>
                      </RowSection>
                    </Card>
                    <RowSection>
                      <Card>Yes</Card>
                      <ColumnSection>
                        <ColumnSection>
                          <Input label="Let's Chat" placeholder="Text Input" />
                          <Button isError label="Click Me">I'm a button</Button>
                        </ColumnSection>
                      </ColumnSection>
                    </RowSection>
                  </Card>
                </ColumnSectionWithHeader>
              ))}
            </ColumnSection>
          </RowContainer>
          <RowSection backgroundColor={'#34515e'} textColor={'#ffb300'}><h4>Built using react and styled-components.</h4></RowSection>
        </CenteredColumnContainer>
      </div>
    );
  }
}

export default App;

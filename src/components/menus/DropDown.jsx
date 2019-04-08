import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import "../../base.css";

const Container = styled.div`
  font-size: 0.8rem;
  transition: 0.2s all;
  background-color: ${colors.defaultButtonBackground};
  display: flex;
  flex-direction: column;
`;
const DropDownMenu = styled.div`
  padding: 0.2rem;
  background-color: ${colors.defaultButtonBackground};
  border-bottom: 1px solid ${colors.defaultButtonHoverColor};
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  &:hover {
    cursor: pointer;
    color: ${colors.defaultButtonHoverTextColor};
    background-color: ${colors.defaultButtonHoverColor};
  }
`;
const DropDownItem = styled.div`
  padding: 0.2rem;
  flex: 1;
  background-color: ${colors.defaultButtonBackground};
  border-bottom: 1px solid ${colors.defaultButtonHoverColor};
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  transition: 0.2s all;
  &:hover {
    cursor: pointer;
    color: ${colors.defaultButtonHoverTextColor};
    background-color: ${colors.defaultButtonHoverColor};
  }
`;

class DropDown extends React.Component {
  state = { dropDownOpen: false };

  toggleDropDown = () =>
    this.setState({ dropDownOpen: !this.state.dropDownOpen });

  render() {
    const { title, itemArr, onClick, hoverDrop } = this.props;
    const dropDownArr = itemArr || ["item1", "item2", "item3"];
    return (
      <Container
        dropDownOpen={this.state.dropDownOpen}
        dropDownArr={dropDownArr}
        onMouseEnter={hoverDrop ? () => this.toggleDropDown() : () => {}}
        onMouseLeave={hoverDrop ? () => this.toggleDropDown() : () => {}}
      >
        <DropDownMenu onClick={() => this.toggleDropDown()}>
          <div>{title || "Drop Down"}</div>
        </DropDownMenu>
        {this.state.dropDownOpen
          ? dropDownArr.map((item, i) => {
              return (
                <DropDownItem key={i} onClick={() => onClick(item)}>
                  <div>{item}</div>
                </DropDownItem>
              );
            })
          : null}
      </Container>
    );
  }
}

export default DropDown;

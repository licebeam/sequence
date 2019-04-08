import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import "../../base.css";

const ModalFadeBackground = styled.div`
  position: fixed;
  background-color: black;
  opacity: 0.5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
  pointer-events: auto;
`;
const FlexContainer = styled.div`
  z-index: 20;
  display: flex;
  flex-direction: row;
  overflow: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.2rem;
  transform: translate(-50%, -50%);
  border-radius: 0.2rem;
  background-color: ${props =>
    props.backgroundColor || colors.defaultContainerColor};
`;

class Modal extends Component {
  render() {
    const { backgroundColor } = this.props;
    return (
      <Fragment>
        <ModalFadeBackground />
        <FlexContainer backgroundColor={backgroundColor}>
          {this.props.children}
        </FlexContainer>
      </Fragment>
    );
  }
}

export default Modal;

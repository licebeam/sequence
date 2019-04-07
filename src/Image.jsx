import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "./constants";
import "./base.css";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  margin: 0.2rem;
  align-self: center;
  flex: 1;
  width: ${props => (props.imageWidth ? props.imageWidth + "px" : "100px")};
  height: ${props => (props.imageHeight ? props.imageHeight + "px" : "100px")};
  .image {
    width: ${props => (props.imageWidth ? props.imageWidth + "px" : "100px")};
    height: ${props =>
      props.imageHeight ? props.imageHeight + "px" : "100px"};
    object-fit: cover;
  }
`;

class Image extends Component {
  render() {
    const { imageURL, imageWidth, imageHeight } = this.props;
    return (
      <FlexContainer imageWidth={imageWidth} imageHeight={imageHeight}>
        <img className="image" src={imageURL} alt={imageURL} />
      </FlexContainer>
    );
  }
}

export default Image;

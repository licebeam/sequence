import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from './constants';
import './base.css';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  margin: .2rem;
  align-self: center;
  flex: 1;
  width: ${props => props.imageWidth ? props.imageWidth + 'px' : '100px'};
  height: ${props => props.imageHeight ? props.imageHeight + 'px' : '100px'};
  background-color: ${props => props.backgroundColor || colors.defaultContainerColor};
  .image{
    width: ${props => props.imageWidth ? props.imageWidth + 'px' : '100px'};
    height: ${props => props.imageHeight ? props.imageHeight + 'px' : '100px'};
    object-fit: cover;
  }
`

class Image extends Component {
  render() {
    const { backgroundColor, imageURL, imageWidth, imageHeight } = this.props;
    return (
      <FlexContainer backgroundColor={backgroundColor} imageWidth={imageWidth} imageHeight={imageHeight}>
        <img className="image" src={imageURL} alt={imageURL} />
      </FlexContainer>
    )
  }
}

export default Image
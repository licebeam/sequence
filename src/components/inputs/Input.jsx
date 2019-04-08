import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import "../../base.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  .label {
    color: ${props => props.labelColor || colors.defaultInputLabel};
    text-align: left;
    font-weight: bold;
    margin: 0.2rem;
  }
`;
const FlexInput = styled.input`
  display: flex;
  flex: 1;
  padding: 0.2rem;
  margin: 0.2rem;
  justify-content: center;
  border: 1px solid ${props => props.borderColor || colors.defaultInputBorder};
  border-radius: 0.2rem;
  font-size: 0.8rem;
  color: ${props => props.backgroundColor || colors.defaultInputTextColor};
  background-color: ${props =>
    props.backgroundColor || colors.defaultInputBackground};
  transition: 0.2s all;
`;

class Input extends Component {
  render() {
    const { label, onChange, type, placeholder } = this.props;
    return (
      <Wrapper>
        <div className="label">{label || ""}</div>
        <FlexInput type={type} placeholder={placeholder} onChange={onChange} />
      </Wrapper>
    );
  }
}

export default Input;

import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import styled from 'styled-components';
import Popular from './popular';
import Recent from './recent';

const ButtonGroup = styled.div`
  display: flex;
  background: #EEE;
`;

const Tab = styled.button`
  border: 1px solid #EEE;
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  border: 0;
  outline: 0;
  margin: 0 10px;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

class Home extends Component {

  constructor() {
    super();
    this.state = { showFirst: true };
  }

  toggleTab(state) {
    this.setState({
      showFirst: state
    });
    console.log(this.state)
  }

  render() {
    return (
       
      <>
      
    <ButtonGroup>
      <Tab onClick={ () => this.toggleTab(true) }>Most Popular</Tab>
      <Tab onClick={ () => this.toggleTab(false) }>Most Recent</Tab>
    </ButtonGroup>

          <ToggleDisplay if={this.state.showFirst} tag="section">
            <Popular/>
          </ToggleDisplay>
          <ToggleDisplay if={!this.state.showFirst} tag="section">
            <Recent/>
          </ToggleDisplay>
      </>
    );
  }
}

export default Home;
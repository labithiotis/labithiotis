import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Background } from './Background';
import { Page } from './Page';

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
`;

export default class App extends PureComponent {
  render() {
    return (
      <Container>
        <Page />
        <Background />
      </Container>
    );
  }
}

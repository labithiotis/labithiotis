import React, { PureComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Background } from './Background';
import { FadeIn } from './components/FadeIn';
import { Page } from './page/Page';
import { theme } from './theme';

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
`;

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <FadeIn />
          <Page />
          <Background />
        </Container>
      </ThemeProvider>
    );
  }
}

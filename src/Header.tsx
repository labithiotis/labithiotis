import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { theme } from './theme';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Banner = styled.div`
  text-align: center;
  color: #fff;
  padding: 40px 80px;
  border: 5px solid #fff;
  transition: background-color 0.5s ease, box-shadow 0.2s ease;
  background-color: rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  pointer-events: fill;

  &:hover {
    background-color: rgba(0, 0, 0, 0.55);
    box-shadow: 0 1px 6px 2px rgba(0, 0, 0, 0.2);
  }
`;

const H1 = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
  color: ${theme.primary}
`;

const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Body = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export class Header extends PureComponent {
  render() {
    return (
      <Container >
        <Banner>
          <H1>Hello</H1>
          <H2>I’m a developer</H2>
          <Body>A Designer, Coder, and Gamer</Body>
        </Banner>
      </Container>
    );
  }
}

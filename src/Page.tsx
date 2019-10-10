import React, { PureComponent } from 'react';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax/cjs';
import styled from 'styled-components';
import { Header } from './Header';
import { Links } from './Links';

const Container = styled.div`
  z-index: 10;
  position: relative;
  pointer-events: none;

  .parallax-outer,
  .parallax-inner {
    pointer-events: none;
  }
`;

export class Page extends PureComponent {
  render() {
    return (
      <Container>
        <ParallaxProvider>
          <Links />
          <Header />
          <ParallaxBanner
            layers={[
              {
                image: 'https://picsum.photos/1000/500',
                amount: 0.5,
                children: null,
              },
              {
                image: 'https://picsum.photos/1000/500',
                amount: 0.8,
                children: null,
              },
            ]}
            style={{ height: '50vh', minHeight: '300px' }}
          />
        </ParallaxProvider>
      </Container>
    );
  }
}

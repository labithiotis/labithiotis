import React, { PureComponent } from 'react';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax/cjs';
import styled from 'styled-components';
import { Header } from './Header';

const Container = styled.div`
  z-index: 10;
  position: relative;
  pointer-events: none;
  
  .parallax-outer, .parallax-inner {
    pointer-events: none;
  }
`;

export class Page extends PureComponent {
  render() {
    return (
      <Container>
        <ParallaxProvider>
          <Parallax y={[-20, 20]} tagOuter="figure">
            <Header />
            <ParallaxBanner
              layers={[
                {
                  image: 'https://picsum.photos/1000/500',
                  amount: 0.1,
                  children: null,
                },
                {
                  image: 'https://picsum.photos/1000/500',
                  amount: 0.2,
                  children: null,
                },
              ]}
              style={{ height: '500px' }}
            >
              Blah
            </ParallaxBanner>
          </Parallax>
        </ParallaxProvider>
      </Container>
    );
  }
}

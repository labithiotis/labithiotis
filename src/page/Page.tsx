import React, { PureComponent } from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax/cjs';
import styled from 'styled-components';
import { AboutMe } from './AboutMe';
import { Footer } from './Footer';
import { Gallery } from './Gallery/Gallery';
import { Header } from './Header';
import { Links } from './Links';
import MountainImage from '../assets/images/mountain.jpg';

const Container = styled.div`
  z-index: 20;
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
                image: MountainImage,
                amount: 0.5,
                children: null,
              },
            ]}
            style={{ height: '50vh', minHeight: '300px' }}
          />
          <AboutMe />
          <Gallery />
          <ParallaxBanner
            layers={[
              {
                image: MountainImage,
                amount: 0.5,
                children: null,
              },
            ]}
            style={{ height: '50vh', minHeight: '300px' }}
          />
          <Footer />
        </ParallaxProvider>
      </Container>
    );
  }
}

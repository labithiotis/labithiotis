import React, { PureComponent } from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax/cjs';
import styled from 'styled-components';
import { AboutMe } from './AboutMe';
import { Footer } from './Footer';
import { Gallery } from './Gallery/Gallery';
import { Header } from './Header';
import { Links } from './Links';
import MountainImage from '../assets/images/mountain.jpg';
import HouseImage from '../assets/images/house.jpg';

type Props = {};

export class Page extends PureComponent<Props> {
  componentDidMount(): void {
    document.getElementsByName('body')
  }

  render() {
    return (
      <ParallaxProvider>
        <Container>
          <Links />
          <Header />
          <ParallaxBanner
            layers={[
              {
                image: MountainImage,
                amount: 0.5,
                children: null,
                expanded: true,
              },
            ]}
            style={{ height: '50vh', minHeight: '300px' }}
          />
          <AboutMe />
          <Gallery />
          <ParallaxBanner
            layers={[
              {
                image: HouseImage,
                amount: 0.7,
                children: null,
              },
            ]}
            style={{ height: '60vh', minHeight: '300px' }}
          />
          <Footer />
        </Container>
      </ParallaxProvider>
    );
  }
}

const Container = styled.div`
  z-index: 20;
  position: relative;
  pointer-events: none;

  .parallax-outer,
  .parallax-inner {
    pointer-events: none;
  }
`;

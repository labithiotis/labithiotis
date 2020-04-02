import React, { PureComponent } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';

import { AboutMe } from './AboutMe';
import { Footer } from './Footer';
import { Gallery } from './Gallery/Gallery';
import { Header } from './Header';
import { Links } from './Links';
import HouseImage from '../assets/images/house.jpg';
import LakeImage from '../assets/images/lake.jpg';

type Props = {};

export class Page extends PureComponent<Props> {
  parallax: any;

  componentDidMount(): void {
    document.getElementsByName('body');
  }

  render() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    return (
      <Parallax pages={isMobile ? 3 : 2.5} scrolling={true} ref={ref => (this.parallax = ref)}>
        <ParallaxLayer offset={0} speed={-0.2}>
          <BackgroundImage image={HouseImage} height="100vh" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={-0.5} speed={-0.4}>
          <Header />
        </ParallaxLayer>
        {!isMobile && (
          <ParallaxLayer offset={1.8} speed={-0.2}>
            <BackgroundImage image={LakeImage} height="40vh" />
          </ParallaxLayer>
        )}
        <ParallaxLayer offset={1} speed={0.6}>
          <AboutMe />
          <Gallery />
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 2.8 : 2.2} speed={0.2}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    );
  }
}

const BackgroundImage = styled.div<{ image: string; height: string }>`
  display: block;
  position: relative;
  background: url(${({ image }) => image}) top center;
  background-size: cover;
  height: ${({ height }) => height};
  width: 100%;
`;

import React, { PureComponent } from 'react';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';
import { AboutMe } from './AboutMe';
import { Footer } from './Footer';
import { Gallery } from './Gallery/Gallery';
import { Header } from './Header';
import { Links } from './Links';
import HouseImage from '../assets/images/house.jpg';
import MountainImage from '../assets/images/mountain.jpg';
import LakeImage from '../assets/images/lake.jpg';

type Props = {};

export class Page extends PureComponent<Props> {
  componentDidMount(): void {
    document.getElementsByName('body');
  }

  render() {
    return (
      <Container>
        <Links />
        <Parallax blur={{ min: -10, max: 20 }} bgImage={HouseImage} strength={500}>
          <Header />
        </Parallax>
        <Parallax bgImage={MountainImage} strength={500}>
          <div style={{ height: '50vh', minHeight: '300px' }} />
        </Parallax>
        <AboutMe />
        <Gallery />
        <Parallax bgImage={LakeImage} strength={200}>
          <div style={{ height: '60vh', minHeight: '500px' }} />
        </Parallax>
        <Footer />
      </Container>
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

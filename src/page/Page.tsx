import React, { PureComponent } from 'react';
import { Parallax, Background } from 'react-parallax';
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
    document.getElementsByName('body');
  }

  render() {
    return (
      <Container>
        <Links />
        <Header />
        <Parallax bgImage={MountainImage} strength={500}>
          <div style={{ height: '40vh', minHeight: '300px' }} />
        </Parallax>
        <AboutMe />
        <Gallery />
        <Parallax bgImage={HouseImage} strength={300}>
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

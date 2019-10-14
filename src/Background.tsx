// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import Color from 'color';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { theme } from './theme';
import backgroundImage from './assets/images/house.jpg';

type Props = {};
type State = { gridSize: number[] };

const NO_COLORS = 20;
const baseColor = Color(theme.background);
const COLORS = new Array(NO_COLORS).fill(1).map((_, i) => {
  const mixer = i % 2 === 0 ? baseColor : Color(theme.white).darken(0.8);
  return baseColor
    .darken(Math.random())
    .mix(mixer, 0.1)
    .hex();
});

export class Background extends PureComponent<Props, State> {
  state = { gridSize: [40, 20] };

  animate = (index: number) => {
    anime({
      targets: '.tile',
      scale: [
        { value: 0.8, easing: 'easeOutSine', duration: 300 },
        { value: 1, easing: 'easeInOutQuad', duration: 600 },
      ],
      duration: 200,
      delay: anime.stagger(50, { grid: this.state.gridSize, start: 0, from: index, easing: 'easeOutSine' }),
    });
  };

  render() {
    return (
      <BackgroundContainer>
        <Fade />
        <TilesContainer animate={this.animate} gridSize={this.state.gridSize} />
      </BackgroundContainer>
    );
  }
}

const BackgroundContainer = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.background} url(${backgroundImage});
  background-size: cover;
`;

const Fade = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
  background: transparent linear-gradient(160deg, rgba(0, 0, 0, 0.1), rgba(13, 18, 35, 0.6));
  pointer-events: none;
`;

const Container = styled.div<{ tileSize: number }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  background: transparent;

  .tile {
    height: 100%;
    width: ${({ tileSize }) => `${tileSize}px`};
  }
`;

function TilesContainer({ animate, gridSize }: { animate: (index: number) => void; gridSize: number[] }) {
  const items = new Array(gridSize[0] * gridSize[1]).fill(1);
  const tileSize = window.self.innerWidth / gridSize[0];
  return (
    <Container tileSize={tileSize}>
      {items.map((_, key) => {
        const color = COLORS[Math.round(Math.min(Math.random() * NO_COLORS, NO_COLORS - 1))];
        return <TileContainer key={key} onClick={() => animate(key)} color={color} />;
      })}
    </Container>
  );
}

const Tile = styled.div<{ color: string; key: number }>`
  background-color: ${({ color }) => color};
  opacity: ${({ key }) => (key % 2 === 0 ? 0.1 : 0.3)};
`;

function TileContainer({ onClick, color, key }: { onClick: () => void; color: string; key: number }) {
  return (
    <div onClick={onClick}>
      <Tile className="tile" color={color} key={key} />
    </div>
  );
}

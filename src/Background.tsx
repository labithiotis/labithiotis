// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import Color from 'color';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import backgroundImage from './assets/images/house.jpg';

type Props = {};
type State = { gridSize: number[] };

const NO_COLORS = 20;
const COLORS = new Array(NO_COLORS).fill(1).map(() =>
  Color('#0A286D')
    .darken(Math.random() / 2)
    .hex()
);

export class Background extends PureComponent<Props, State> {
  timer: number = 0;
  state = { gridSize: [0, 0] };

  componentDidMount() {
    this.updateGridSize();
    window.addEventListener('resize', this.updateGridSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateGridSize);
  }

  updateGridSize = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.setGridSize(), 500);
  };

  setGridSize = () => {
    const { innerWidth, innerHeight } = window;
    this.setState({ gridSize: [Math.round(innerWidth / 40), Math.round(innerHeight / 20)] });
  };

  animate = (index: number) => {
    anime({
      targets: '.tile',
      scale: [
        { value: 0.8, easing: 'easeOutSine', duration: 300 },
        { value: 1, easing: 'easeInOutQuad', duration: 600 },
      ],
      opacity: [
        { value: 0.6, easing: 'easeOutSine', duration: 600 },
        { value: 0.1, easing: 'easeInOutQuad', duration: 600 },
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
        <BackgroundImage />
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
`;

const BackgroundImage = styled.div`
  z-index: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.background} url(${backgroundImage});
  background-size: cover;
  filter: blur(3px);
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
  background: transparent linear-gradient(170deg, rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.9));
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
  justify-items: flex-start;
  background: transparent;
  z-index: 5;

  .tile {
    height: ${({ tileSize }) => `${tileSize}px`};
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
  opacity: 0.15;
  transition: opacity 1s ease-out;

  :hover {
    opacity: 0.6 !important;
    background-color: rgba(0, 0, 0, 0.6) !important;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.6);
    transform: scale(1.1);
  }
`;

function TileContainer({ onClick, color, key }: { onClick: () => void; color: string; key: number }) {
  return (
    <div onClick={onClick}>
      <Tile className="tile" color={color} key={key} />
    </div>
  );
}

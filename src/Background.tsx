import Color from 'color';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';

const theme = {
  background: '#262626',
  primary: '#a8781c',
  secondary: '#ac401e',
};

const StyledContainer = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  background: ${theme.background}
    linear-gradient(
      140deg,
      ${Color(theme.background)
        .darken(0.4)
        .hex()},
      ${Color(theme.background)
        .darken(0.2)
        .hex()}
    );
`;

const StyledTile = styled.div<{ width: number; height: number; color: string }>`
  width: ${({ width }) => `${width}px`};
  height: 100%;
  background-color: ${({ color }) => color};
  opacity: ${() => Math.max(0.6, Math.random())};
`;

type Props = {};
type State = { gridSize: number[] };

const NO_COLORS = 20;
const baseColor = Color(theme.background);
const COLORS = new Array(NO_COLORS).fill(1).map((_, i) => {
  const mixer = i % 2 === 0 ? baseColor : Color(theme.primary).darken(0.8);
  return baseColor
    .darken(i / 500)
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
    return <Container animate={this.animate} gridSize={this.state.gridSize} />;
  }
}

function Container({ animate, gridSize }: { animate: (index: number) => void; gridSize: number[] }) {
  const items = new Array(gridSize[0] * gridSize[1]).fill(1);
  const tileSize = window.self.innerWidth / gridSize[0];
  return (
    <StyledContainer>
      {items.map((_, key) => {
        const color = COLORS[Math.round(Math.min(Math.random() * NO_COLORS, NO_COLORS - 1))];
        return <TileContainer key={key} onClick={() => animate(key)} color={color} tileSize={tileSize} />;
      })}
    </StyledContainer>
  );
}

function TileContainer({ onClick, color, tileSize }: any) {
  return (
    <div onClick={onClick}>
      <StyledTile className="tile" color={color} width={tileSize} height={tileSize} />
    </div>
  );
}

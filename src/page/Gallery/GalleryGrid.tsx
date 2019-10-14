import React, { PureComponent, ReactNode, Fragment } from 'react';
import Carousel, { ModalGateway, Modal } from 'react-images';
import styled, { createGlobalStyle } from 'styled-components';
import { VideoPlayer } from './VideoPlayer';

export type MediaImage = {
  regular: string;
  thumbnail?: string;
};

export type MediaVideo = {
  regular: string;
  thumbnail?: string;
  url: string;
};

export enum MediaTypes {
  image = 'image',
  video = 'video',
}

export type Media<Source = MediaImage | MediaVideo> = {
  type: MediaTypes;
  group: string;
  caption: ReactNode;
  source: Source;
};

type Props = {
  media: Media[];
};

type State = {
  showLightBox: boolean;
  selectedIndex?: number;
};

export class GalleryGrid extends PureComponent<Props, State> {
  state = {
    showLightBox: false,
    selectedIndex: undefined,
  };

  toggleLightBox = (selectedIndex: number) => {
    this.setState({ showLightBox: !this.state.showLightBox, selectedIndex });
  };

  render() {
    const { media } = this.props;
    const { showLightBox, selectedIndex = 0 } = this.state;

    return (
      <Container>
        <GlobalStyle />
        {media.map(({ caption, source }, index) => (
          <Thumbnail key={index} src={source.thumbnail || source.regular} onClick={() => this.toggleLightBox(index)} />
        ))}
        <ModalGateway>
          {showLightBox ? (
            media[selectedIndex].type === MediaTypes.video ? (
              <Modal onClose={this.toggleLightBox} allowFullscreen={false}>
                <Carousel views={media} currentIndex={selectedIndex} components={{ Footer: null, View: VideoPlayer }} />
              </Modal>
            ) : (
              <Modal onClose={this.toggleLightBox} allowFullscreen={false}>
                <Carousel views={media} currentIndex={selectedIndex} />
              </Modal>
            )
          ) : null}
        </ModalGateway>
      </Container>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  .fullscreen {
    position: relative;
    z-index: 200;
  }
`;

const Container = styled.div``;
const Thumbnail = styled.div<{ src: string }>`
  background: #e8e8e8 url(${({ src }) => src}) center center;
  background-size: cover;
  box-sizing: border-box;
  float: left;
  margin: 1px;
  overflow: hidden;
  position: relative;
  width: 198px;
  height: 140px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;

import React, { PureComponent, ReactNode } from 'react';
import Carousel, { ModalGateway, Modal } from 'react-images';
import styled, { createGlobalStyle } from 'styled-components';
import { VideoPlayer } from './VideoPlayer';
import { FaPlayCircle } from 'react-icons/fa';

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
        {media.map(({ caption, source, type }, index) => (
          <MediaPreview>
            {type === MediaTypes.video && <VideoPlayIcon />}
            <Thumbnail
              key={index}
              src={source.thumbnail || source.regular}
              onClick={() => this.toggleLightBox(index)}
            />
          </MediaPreview>
        ))}
        <ModalGateway>
          {showLightBox ? (
            media[selectedIndex].type === MediaTypes.video ? (
              <Modal onClose={this.toggleLightBox} allowFullscreen={false}>
                <Carousel views={media} currentIndex={selectedIndex} components={{ Footer: null, View: VideoPlayer }} />
              </Modal>
            ) : (
              <Modal onClose={this.toggleLightBox} allowFullscreen={false}>
                <Carousel views={media} currentIndex={selectedIndex} frameProps={{ autoSize: 'height' }} />
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const VideoPlayIcon = styled(FaPlayCircle)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
  color: white;
  font-size: 24px;
`;

const MediaPreview = styled.div`
  position: relative;
  padding: 2px;
  width: 25%;
  height: 140px;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;
  transition: padding 0.2s ease, opacity 0.2s ease;

  :hover {
    opacity: 0.8;
    padding: 4px;
  }
`;

const Thumbnail = styled.div<{ src: string }>`
  background: url(${({ src }) => src}) center center;
  background-size: cover;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

import React, { PureComponent, ReactNode } from 'react';
import Carousel, { ModalGateway, Modal } from 'react-images';
import styled, { createGlobalStyle } from 'styled-components';

import { theme } from '../../theme';
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

const Thumbnail = styled.div<{ src: string }>`
  background: #111111 url(${({ src }) => src}) center center no-repeat;
  background-size: contain;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 10px;
  margin-left: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border-radius: 10px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.4s ease;
`;

const MediaPreview = styled.div`
  position: relative;
  padding: 0px;
  width: 25%;
  height: 140px;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;
  transition: padding 0.2s ease;

  :hover {
    padding: 2px;

    ${Thumbnail} {
      background-color: ${theme.primary};
    }
  }
`;

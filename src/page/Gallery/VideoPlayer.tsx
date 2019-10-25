import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Media, MediaVideo } from './GalleryGrid';
import ReactPlayer from 'react-player';

type Props = {
  currentIndex: number;
  data: Media<MediaVideo>;
};
type State = {};

export class VideoPlayer extends PureComponent<Props, State> {
  render() {
    return (
      <Container>
        <ReactPlayer url={this.props.data.source.url} />
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

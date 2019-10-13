import React, { PureComponent, ReactNode, Fragment } from 'react';
import Carousel, { ModalGateway, Modal } from 'react-images';
import styled, { createGlobalStyle } from 'styled-components';
import { Section, MainContainer } from '../components/Typography';

export type Media = {
  type: 'image' | 'video';
  group: string;
  caption: ReactNode;
  source: {
    regular: string;
    thumbnail?: string;
  };
};

type Props = {
  media: Media[];
};

type State = {
  showLightBox: boolean;
  selectedIndex?: number;
};

export class Gallery extends PureComponent<Props, State> {
  state = {
    showLightBox: false,
    selectedIndex: undefined,
  };

  toggleLightBox = (selectedIndex: number) => {
    this.setState({ showLightBox: !this.state.showLightBox, selectedIndex });
  };

  render() {
    const { media } = this.props;
    return (
      <Fragment>
        <GlobalStyle />
        <Section minHeight="400px">
          <MainContainer>
            {media.map(({ caption, source }, index) => (
              <Thumbnail
                key={index}
                src={source.thumbnail || source.regular}
                onClick={() => this.toggleLightBox(index)}
              />
            ))}
          </MainContainer>
        </Section>
        <ModalGateway>
          {this.state.showLightBox ? (
            <Modal onClose={this.toggleLightBox}>
              <Carousel views={media} currentIndex={this.state.selectedIndex} frameProps={{ autoSize: 'height' }} />
            </Modal>
          ) : null}
        </ModalGateway>
      </Fragment>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  .fullscreen {
    position: relative;
    z-index: 200;
  }
`;

const Thumbnail = styled.div<{ src: string }>`
  background: #eee url(${({ src }) => src}) center center;
  background-size: cover;
  box-sizing: border-box;
  float: left;
  margin: 2px;
  overflow: hidden;
  padding-bottom: 16%;
  position: relative;
  width: 180px;
  height: 110px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;

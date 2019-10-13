import React, { PureComponent, ReactNode, Fragment } from 'react';
import Carousel, { ModalGateway, Modal } from 'react-images';
import styled, { createGlobalStyle } from 'styled-components';
import { Section, MainContainer } from '../components/Typography';

type Image = {
  caption: ReactNode;
  source: {
    regular: string;
    thumbnail?: string;
  };
};

type Props = {
  images: Image[];
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
    const { images } = this.props;
    return (
      <Fragment>
        <GlobalStyle />
        <Section minHeight="400px">
          <MainContainer>
            <div>
              {images.map(({ caption, source }, index) => (
                <Thumbnail
                  key={index}
                  src={source.thumbnail || source.regular}
                  onClick={() => this.toggleLightBox(index)}
                />
              ))}
            </div>
          </MainContainer>
        </Section>
        <ModalGateway>
          {this.state.showLightBox ? (
            <Modal onClose={this.toggleLightBox}>
              <Carousel views={images} currentIndex={this.state.selectedIndex} frameProps={{ autoSize: 'height' }} />
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

import color from 'color';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import LakeImage from '../assets/images/lake.jpg';

import { Section } from '../components/Typography';

export class Footer extends PureComponent {
  render() {
    return (
      <Section>
        <Container>
          <BackgroundImage image={LakeImage} height="40vh" />
          <Contents>
            <div>
              <strong>Built by</strong> Darren Labithiotis
            </div>
            <div>
              2009-{new Date().toISOString().substr(0, 4)} ©{' '}
              <a href="mailto:darren@labithiotis.co.uk">labithiotis.co.uk</a>
            </div>
          </Contents>
        </Container>
      </Section>
    );
  }
}

const Container = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  text-align: center;
  padding: 60px 0;
  color: ${({ theme }) => theme.subtle};

  strong {
    font-weight: 500;
    color: ${({ theme }) =>
      color(theme.subtle)
        .darken(0.2)
        .hex()};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.subtle};

    :hover {
      color: ${({ theme }) =>
        color(theme.subtle)
          .darken(0.2)
          .hex()};
    }
  }
`;

const BackgroundImage = styled.div<{ image: string; height: string }>`
  background: url(${({ image }) => image}) top center;
  background-size: cover;
  height: ${({ height }) => height};
  width: 100%;
`;

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { H1, H2 } from '../components/Typography';
import { FaRegHeart } from 'react-icons/fa';

export class Header extends PureComponent {
  render() {
    return (
      <Section>
        <Contents>
          <Banner>
            <Title>Welcome</Title>
            <SubTitle>I’m an experienced software engineer</SubTitle>
            <SubTitleSmall>
              Working remotely from Austria <FaRegHeart size={12} />
            </SubTitleSmall>
          </Banner>
        </Contents>
      </Section>
    );
  }
}

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const Contents = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 0;
`;

const Banner = styled.div`
  text-align: center;
  color: #fff;
  padding: 40px;
  border: 5px solid #fff;
  transition: background-color 0.5s ease, box-shadow 0.2s ease;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  pointer-events: auto;

  :hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled(H1)`
  margin-bottom: 15px;
`;

const SubTitle = styled(H2)`
  margin-bottom: 5px;
`;

const SubTitleSmall = styled(H2)`
  font-size: 14px;
  margin-bottom: 5px;
`;

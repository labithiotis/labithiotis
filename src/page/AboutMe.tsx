import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { H1, Body, MainContainer, Section } from '../components/Typography';
import MyImage from '../assets/images/darren_labithiotis.jpg';

const Image = styled.div`
  margin-left: 30px;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background: url(${MyImage}) center center;
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    text-align: center;
    
    ${Image} {
      margin: 10px;
    }
  }
`;

const Contents = styled.div`
  flex: 1;
`;

export class AboutMe extends PureComponent {
  render() {
    return (
      <Section>
        <MainContainer>
          <H1>About me</H1>
          <Container>
            <Contents>
              <Body>
                I'm a senior software engineer working remotely from Austria. I've been programming for the last 10
                years, primarily in <strong>JavaScript</strong> and in recent years <strong>TypeScript</strong>. I use
                to live and work in Central London. While I lived in London I attended many meetups including the hugely
                popular Redbadger React meetup, this lead to me becoming a very early adopter of React and React Native,
                and I haven't looked back. The tooling around Javascript has exploded in the last decade allow us
                developers to build very sophisticated applications.
              </Body>
              <Body>
                I'm thoroughly passionate about programming, it allows one to build a rich experience for users, I truly
                believe technology is aiding society. Early in my carrier, I was a Designer, which gave me great insight
                and a keen eye for UI/UX. I've always been technical and wanted to pursue the full end to end
                development of ideas, thus I set my sites on developing those, from frontend to backend and
                infrastructure to support that.
              </Body>
              <Body>
                Since 2017 I relocated to the Austria mountains to become a remote engineer, advances in technology
                making doing some almost seamless. I use a variety of tools to aid working remotely easy.
              </Body>
            </Contents>
            <Image />
          </Container>
        </MainContainer>
      </Section>
    );
  }
}

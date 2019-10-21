import React, { PureComponent } from 'react';
import { H1, Body, MainContainer, Section } from '../components/Typography';

export class AboutMe extends PureComponent {
  render() {
    return (
      <Section minHeight="400px">
        <MainContainer>
          <H1>About me</H1>
          <Body>
            I'm a senior software engineer working remotely from Austria. I've been programming for the last 10 years,
            primarily in <strong>JavaScript</strong> and in recent years <strong>TypeScript</strong>. I use to live and
            work in Central London. While I lived in London I attended many meetups including the hugely popular
            Redbadger React meetup, this lead to me becoming a very early adopter of React and React Native, and I
            haven't looked back. The tooling around Javascript has exploded in the last decade allow us developers to
            build very sophisticated applications.
          </Body>
          <Body>
            I'm thoroughly passionate about programming, it allows one to build a rich experience for users, I truly
            believe technology is aiding society. Early in my carrier, I was a Designer, which gave me great insight and
            a keen eye for UI/UX. I've always been technical and wanted to pursue the full end to end development of
            ideas, thus I set my sites on developing those, from frontend to backend and infrastructure to support that.
          </Body>
          <Body>
            Since 2017 I relocated to the Austria mountains to become a remote engineer, advances in technology making
            doing some almost seamless. I use a variety of tools to aid working remotely easy.
          </Body>
        </MainContainer>
      </Section>
    );
  }
}

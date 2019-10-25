import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { MainContainer, Section } from '../../components/Typography';
import { GalleryGrid, Media } from './GalleryGrid';
import { media } from './media';

const tabs: { [group: string]: Media[] } = {};
media.forEach(media => {
  tabs[media.group] = tabs[media.group] || [];
  tabs[media.group].push(media);
});

type Props = {};
type State = {
  tabNames: string[];
  currentTab: string;
};

export class Gallery extends PureComponent<Props, State> {
  state: State = { currentTab: Object.keys(tabs)[0], tabNames: Object.keys(tabs) };

  changeTab = (currentTab: string) => this.setState({ currentTab });

  render() {
    const { tabNames, currentTab } = this.state;
    return (
      <Section minHeight="400px">
        <Container>
          <Tabs>
            {tabNames.map(name => (
              <Tab active={name === currentTab} onClick={() => this.changeTab(name)}>
                {name}
              </Tab>
            ))}
          </Tabs>
          <GalleryGrid media={tabs[currentTab]} />
        </Container>
      </Section>
    );
  }
}

const Container = styled(MainContainer)`
  margin-bottom: 60px;
`;

const Tabs = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
`;

const Tab = styled.li<{ active: boolean }>`
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0 10px;
  padding: 0 10px;
  cursor: pointer;
  color: ${({ active, theme }) => (active ? theme.primary : theme.black)};

  :before {
    position: absolute;
    display: block;
    content: ' ';
    bottom: -5px;
    right: 0;
    transition: left 0.2s ease, width 0.2s ease;
    background-color: ${({ theme }) => theme.primary};

    left: ${({ active }) => (active ? '0%' : '50%')};
    width: ${({ active }) => (active ? '100%' : '0%')};
    height: ${({ active }) => (active ? '4px' : '0px')};
  }

  :hover:before {
    left: 20%;
    width: 60%;
    height: 4px;
    color: ${({ theme }) => theme.primary};
  }
`;

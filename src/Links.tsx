import Color from 'color';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { theme } from './theme';

const Container = styled.ul`
  position: fixed;
  top: 0;
  right: 30px;
  list-style-type: none;
  pointer-events: fill;
`;

const LinkTagContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 100%;
  margin-left: -100px;
  width: 200px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  opacity: 0;
  visibility: hidden;
  transition: margin-top 0.3s ease, opacity 0.3s ease;
`;

const Link = styled.li`
  position: relative;
  float: left;
  width: 40px;
  height: 40px;
  margin-top: -15px;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: margin-top 0.2s, background-color 0.4s ease, border 0.3s ease;

  &:hover {
    margin-top: -5px;
    background-color: rgba(0, 0, 0, 0.6);
    border-color: ${theme.primary};
  }

  &:hover {
    ${LinkTagContainer} {
      visibility: visible;
      opacity: 1;
      margin-top: 16px;
    }
  }
`;

const LinkLabel = styled.a`
  text-decoration: none;
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

const LinkTag = styled.div`
  padding: 2px 10px;
  border-radius: 5px;
  background-color: ${theme.primary};
  color: #fff;
  font-size: 14px;

  &:after {
    position: absolute;
    top: -20px;
    left: 50%;
    margin-left: -10px;
    content: '';
    height: 0;
    width: 0;
    pointer-events: none;
    border: solid transparent; // need this
    border-color: rgba(0, 0, 0, 0);
    border-bottom-color: ${theme.primary};
    border-width: 10px;
    margin-left: -10px;
    backface-visibility: hidden;
    transition: opacity 0.3s ease;
  }
`;

export class Links extends PureComponent {
  render() {
    return (
      <Container>
        <Link>
          <LinkLabel>1</LinkLabel>
          <LinkTagContainer>
            <LinkTag>Antyhing</LinkTag>
          </LinkTagContainer>
        </Link>
        <Link>
          <LinkLabel>2</LinkLabel>
          <LinkTagContainer>
            <LinkTag>TW</LinkTag>
          </LinkTagContainer>
        </Link>
        <Link>
          <LinkLabel>3</LinkLabel>
          <LinkTagContainer>
            <LinkTag>asdss</LinkTag>
          </LinkTagContainer>
        </Link>
      </Container>
    );
  }
}

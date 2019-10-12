import React, { PureComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaRegFileAlt } from 'react-icons/fa';

const Container = styled.ul`
  position: fixed;
  top: 0;
  right: 30px;
  list-style-type: none;
  pointer-events: fill;
`;

const LinkTooltipContainer = styled.div`
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

const LinkContainer = styled.li`
  position: relative;
  float: left;
  width: 40px;
  height: 50px;
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

    ${LinkTooltipContainer} {
      visibility: visible;
      opacity: 1;
      margin-top: 16px;
    }
  }
`;

const Link = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const LinkLabel = styled.span`
  text-decoration: none;
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-bottom: 5px;
`;

const LinkTooltip = styled.div`
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
        <LinkItem icon={<FaRegFileAlt />} tooltip="CV" target="_self" href="http://labithiotis.co.uk/Darren_Labithiotis_CV.pdf" />
        <LinkItem icon={<FaLinkedinIn />} tooltip="LinkedIn" href="https://www.linkedin.com/in/labithiotis" />
        <LinkItem icon={<FaGithub />} tooltip="Github" href="https://github.com/labithiotis" />
        <LinkItem icon={<FaRegEnvelope />} tooltip="Email" href="mailto:darren@labithiotis.co.uk" />
      </Container>
    );
  }
}

function LinkItem({
  icon,
  tooltip,
  href,
  target = '_blank',
}: {
  icon: ReactNode;
  tooltip: ReactNode;
  href: string;
  target?: string;
}) {
  return (
    <LinkContainer>
      <Link href={href} target={target}>
        <LinkLabel>{icon}</LinkLabel>
        <LinkTooltipContainer>
          <LinkTooltip>{tooltip}</LinkTooltip>
        </LinkTooltipContainer>
      </Link>
    </LinkContainer>
  );
}

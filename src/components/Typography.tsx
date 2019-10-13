import styled from 'styled-components';
import { theme } from '../theme';

export const H1 = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
  color: ${theme.primary};
`;

export const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Body = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const defaultColor = theme.background;

export const Section = styled.div<{ color?: string; backgroundColor?: string; minHeight: string }>`
  display: flex;
  justify-content: center;
  background-color: ${({ backgroundColor = 'white' }) => backgroundColor};
  color: ${({ color = defaultColor }) => color};
  min-height: ${({ minHeight }) => minHeight};
`;

export const MainContainer = styled.div`
  position: relative;
  padding: 40px 80px;
  max-width: 800px;
  pointer-events: auto;
`;

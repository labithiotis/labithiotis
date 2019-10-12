import styled from 'styled-components';
import { theme } from '../theme';

export const H1 = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
  color: ${theme.primary}
`;

export const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Body = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const MainContainer = styled.div`
  padding: 40px 80px;
  max-width: 800px;
`;
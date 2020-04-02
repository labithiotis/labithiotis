import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primary};
`;

export const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Body = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({ color, theme }) => color || theme.black};

  strong {
    color: #000000;
  }
`;

export const Section = styled.div<{ color?: string; backgroundColor?: string; }>`
  display: flex;
  justify-content: center;
  background-color: ${({ backgroundColor = 'white' }) => backgroundColor};
  color: ${({ color, theme }) => color || theme.black};
`;

export const MainContainer = styled.div`
  position: relative;
  padding: 40px;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 1000px) {
    padding: 30px;
    text-align: center;
  }
`;

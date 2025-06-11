import styled, { keyframes } from 'styled-components';
import { colors } from '../styles/colors';

const backgroundPan = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`;

export const DynamicBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: ${colors.background};

  background: linear-gradient(
    135deg,
    ${colors.gradientStart} 0%,
    ${colors.gradientMid} 50%,
    ${colors.gradientEnd} 100%
  );
  background-size: 200% 200%;
  animation: ${backgroundPan} 20s ease infinite alternate;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 0;
  }
`;
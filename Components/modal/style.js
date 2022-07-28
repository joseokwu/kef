import styled from 'styled-components/macro';
import { colors } from '../../color';

export const Tint = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: ${colors.overlay};
  top: 0;
  left: 0;
  z-index: 98;
`;

export const ModalContainer = styled.div`
  width: calc(40% - 100px);
  padding: 20px;
  border-radius: 24px;
  background: ${colors.white};
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);

  header {
    display: flex;
    width: 100%;
    padding-bottom: 10px;

    img {
      cursor: pointer;
    }
  }

  @media (max-width: 1000px) {
    width: calc(70% - 40px);
  }

  @media (max-width: 800px) {
    width: calc(90% - 40px);
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

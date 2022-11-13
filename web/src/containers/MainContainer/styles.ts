import styled from 'styled-components';

import { GlobalThemeProps } from './../../styles/global';

export const Container = styled.div`
  padding: 1.6rem 2.4rem;
  border-radius: 4px;
  width: 50rem;

  max-height: 90vh;
  overflow: hidden;

  background-color: ${({ theme }: GlobalThemeProps) => theme.colors.white};
  box-shadow: ${({ theme }: GlobalThemeProps) => theme.shadow};
`;

export const FilesContainer = styled.div`
  margin: 0.8rem 0;

  height: 90%;

  overflow-y: auto;
  overflow-x: none;

  &::-webkit-scrollbar {
    width: 0.6rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 1px 4px 6px rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${({ theme }: GlobalThemeProps) => theme.colors.purple[500]};
  }
`;
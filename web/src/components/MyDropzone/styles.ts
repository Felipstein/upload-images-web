import styled, { css } from 'styled-components';
import { GlobalThemeProps } from './../../styles/global';

const variants = {
  active: css`
    color: ${({ theme }: GlobalThemeProps) => theme.colors.green[500]};
    border-color: ${({ theme }: GlobalThemeProps) => theme.colors.green[500]};
    `,
  reject: css`
    color: ${({ theme }: GlobalThemeProps) => theme.colors.red[500]};
    border-color: ${({ theme }: GlobalThemeProps) => theme.colors.red[500]};
  `,
};

interface ContainerProps {
  isDragActive: boolean;
  isDragReject: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;

  padding: 1.6rem 2.4rem;

  color: ${({ theme }: GlobalThemeProps) => theme.colors.gray[400]};
  border: 2px dashed ${({ theme }: GlobalThemeProps) => theme.colors.gray[400]};
  border-radius: 4px;

  cursor: pointer;
  user-select: none;

  ${({ isDragActive }) => isDragActive && variants.active}
  ${({ isDragReject }) => isDragReject && variants.reject}
`;
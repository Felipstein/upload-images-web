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

export const FilesInfoContainer = styled.ul`
  margin-top: 1.2rem;

  & > * + * {
    margin-top: 0.4rem;
  }
`;

interface FileContainerProps {
  error: boolean;
}

export const FileContainer = styled.li<FileContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
  border-radius: 8px;

  padding: 0.8rem 1.6rem;

  height: fit-content;

  ${({ theme, error }: GlobalThemeProps & FileContainerProps) => error && css`
    background-color: ${theme.colors.red[100]};
  `};
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    font-size: 1.4rem;

    strong {
      font-weight: 700;
    }

    span {
      color: ${({ theme }: GlobalThemeProps) => theme.colors.gray[400]};
      font-weight: 400;
    }
  }
`;

export const Icons = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  .copy-link-btn {
    color: ${({ theme }: GlobalThemeProps) => theme.colors.gray[700]};
  }

  .delete-btn {
    color: ${({ theme }: GlobalThemeProps) => theme.colors.red[500]};
  }

  .cancel-btn {
    color: ${({ theme }: GlobalThemeProps) => theme.colors.gray[700]};
  }
`;

export const ErrorIcon = styled.div`
  display: flex;
  align-items: center;

  font-size: 2.4rem;
  color: ${({ theme }: GlobalThemeProps) => theme.colors.red[500]};
`;
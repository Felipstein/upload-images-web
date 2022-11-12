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
`;

export const FileContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  padding: 0.8rem 1.6rem;

  height: fit-content;
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

interface FilePreviewProps {
  src: string;
}

export const FilePreview = styled.div<FilePreviewProps>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  width: 5rem;
  height: 4.8rem;

  border-radius: 16px;
`;

export const FileActions = styled.div`
  display: flex;
  gap: 0.2rem;
`;

export const CopyLinkButton = styled.button`
  display: flex;
  align-items: center;

  color: ${({ theme }: GlobalThemeProps) => theme.colors.gray[500]};
  font-size: 2.4rem;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${({ theme }: GlobalThemeProps) => theme.colors.gray[700]};
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;

  color: ${({ theme }: GlobalThemeProps) => theme.colors.red[500]};
  font-size: 2.4rem;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${({ theme }: GlobalThemeProps) => theme.colors.red[400]};
  }
`;

export const ErrorIcon = styled.div`
  font-size: 2.4rem;
  color: ${({ theme }: GlobalThemeProps) => theme.colors.red[500]};
`;
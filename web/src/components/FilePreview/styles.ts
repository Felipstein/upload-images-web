import React from "react";
import styled, { css } from "styled-components";

import { GlobalThemeProps } from './../../styles/global';

export const AnchorStyled = styled.a`
  border: 2px solid transparent;
  text-decoration: none;

  border-radius: 12px;

  overflow: hidden;

  transition: transform 0.1s ease-in-out;

  ${({ theme, href }: GlobalThemeProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => href && css`
    cursor: pointer;

    &:hover {
      transform: scale(108%);
    }
  `};
`;

interface FilePreviewProps {
  src: string;
}

export const FilePreview = styled.div<FilePreviewProps>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  width: 4.8rem;
  height: 4.8rem;
`;
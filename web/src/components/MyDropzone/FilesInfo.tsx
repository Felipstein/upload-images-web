import { useContext } from 'react';
import { Link, Trash, Warning, X } from 'phosphor-react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { ThemeContext } from 'styled-components';

import { FileImage } from '../../types/File.type';

import * as S from './styles';
import { Tooltip } from '../Tooltip';

interface FilesInfoProps {
  files: FileImage[];
}

export function FilesInfo({ files }: FilesInfoProps) {
  const theme = useContext(ThemeContext);

  return (
    <S.FilesInfoContainer>
      {files.map((file) => (
        <S.FileContainer key={file.id}>

          <S.FileInfo>
            <S.FilePreview src={file.preview} />

            <div>
              <strong>{file.name}</strong>
              <span>{file.readableSize}</span>
            </div>
          </S.FileInfo>

          {file.uploaded && !file.error && (
            <S.Icons>
              <S.IconButton>
                <S.CopyLinkButton>
                  <Link />
                </S.CopyLinkButton>
              </S.IconButton>
              <S.IconButton>
                <S.DeleteButton>
                  <Trash />
                </S.DeleteButton>
              </S.IconButton>
            </S.Icons>
          )}

          {!file.uploaded && !file.error && (
            <CircularProgressbar
              styles={{
                root: { width: '2.4rem' },
                path: { stroke: theme.colors.green[500] }
              }}
              value={file.progress}
              strokeWidth={10}
            />
          )}

          {file.error && (
            <S.Icons>
              <Tooltip text={file.error}>
                <S.ErrorIcon>
                  <Warning />
                </S.ErrorIcon>
              </Tooltip>
              <Tooltip text="Remover">
                <S.CancelIcon>
                  <X />
                </S.CancelIcon>
              </Tooltip>
            </S.Icons>
          )}

        </S.FileContainer>
      ))}
    </S.FilesInfoContainer>
  );
}
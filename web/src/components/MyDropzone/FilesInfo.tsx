import { useContext } from 'react';
import { Link, Trash, Warning } from 'phosphor-react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { ThemeContext } from 'styled-components';

import { FileImage } from '../../types/File.type';

import * as S from './styles';

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

          {file.uploaded && !file.error ? (
            <S.FileActions>
              <S.CopyLinkButton>
                <Link />
              </S.CopyLinkButton>
              <S.DeleteButton>
                <Trash />
              </S.DeleteButton>
            </S.FileActions>
          ) : (
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
            <S.ErrorIcon>
              <Warning />
            </S.ErrorIcon>
          )}

        </S.FileContainer>
      ))}
    </S.FilesInfoContainer>
  );
}
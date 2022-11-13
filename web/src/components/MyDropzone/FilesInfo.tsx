import { useContext } from 'react';
import { Link, Trash, Warning, X } from 'phosphor-react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { toast } from 'react-toastify';
import { ThemeContext } from 'styled-components';

import { FileImage } from '../../types/File.type';
import { copyToClipboard } from '../../utils/copyToClipboard';

import { Tooltip } from '../Tooltip';
import { IconButton } from '../IconButton';
import { FilePreview } from '../FilePreview';

import * as S from './styles';

interface FilesInfoProps {
  files: FileImage[];
  onDelete: (id: string) => void;
}

export function FilesInfo({ files, onDelete }: FilesInfoProps) {
  const theme = useContext(ThemeContext);

  function handleCopyLink(url: string) {
    copyToClipboard(url);

    toast('Link copiado', {
      position: 'bottom-center',
    });
  }

  return (
    <S.FilesInfoContainer>
      {files.map((file) => (
        <S.FileContainer key={file.id} error={!!file.error} >

          <S.FileInfo>
            <FilePreview src={file.preview} href={file.url ?? undefined} />

            <div>
              <strong>{file.name}</strong>
              <span>{file.readableSize}</span>
            </div>
          </S.FileInfo>

          {file.uploaded && !file.error && (
            <S.Icons>
              <IconButton className="copy-link-btn" tooltipText="Copiar link" onClick={() => handleCopyLink(file.url!)}>
                <Link />
              </IconButton>
              <IconButton
                className="delete-btn"
                tooltipText="Deletar"
                isLoading={file.isDeleting}
                onClick={() => onDelete(file.id)}
              >
                <Trash />
              </IconButton>
            </S.Icons>
          )}

          {!file.uploaded && !file.error && (
            <CircularProgressbar
              styles={{
                root: { width: '2.4rem' },
                path: { stroke: theme.colors.green[500] }
              }}
              value={file.progress!}
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
              <IconButton className="remove-btn" tooltipText="Cancelar">
                <X />
              </IconButton>
            </S.Icons>
          )}

        </S.FileContainer>
      ))
      }
    </S.FilesInfoContainer >
  );
}
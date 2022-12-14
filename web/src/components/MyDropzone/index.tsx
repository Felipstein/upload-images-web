import { filesize } from 'filesize';
import { reject } from 'lodash';
import { useCallback, useState } from 'react';
import { useDropzone, FileRejection, DropEvent } from 'react-dropzone';
import { toast } from 'react-toastify';
import images from '../../configs/images';

import * as S from './styles';

interface MyDropzoneProps {
  onUpload: (files: File[]) => void;
}

export function MyDropzone({ onUpload }: MyDropzoneProps) {
  const renderTextInfo = (isDragActive: boolean, isDragReject: boolean) => {
    if (!isDragActive) {
      return <span>Arraste suas imagens aqui ou clique para procurar</span>
    }

    if (isDragReject) {
      return <span>Arquivos incompatíveis ou possui 10 imagens</span>
    }

    return <span>Solte agora suas imagens!</span>
  };

  const handleFilesDropped = useCallback((acceptedFiles: File[], rejectableFiles: FileRejection[]) => {
    if (rejectableFiles.length > 0) {
      toast.error(`${rejectableFiles.length} image${rejectableFiles.length > 1 ? 'ns' : 'm'} não fo${rejectableFiles.length > 1 ? 'ram' : 'i'} enviada${rejectableFiles.length > 1 ? 's' : ''}`);
    }

    const { accepted, rejected } = filterFiles(acceptedFiles);

    if (rejected.length > 0) {
      if (rejected.length === 1) {
        toast.error(`${rejected.length} imagem não foi enviada por ultrapassar o limite de ${filesize(images.limitSize)}`);
      } else {
        toast.error(`${rejected.length} imagens não foram enviadas por ultrapassarem o limite de ${filesize(images.limitSize)}`);
      }
    }

    onUpload(accepted);
  }, [onUpload]);

  function filterFiles(files: File[]) {
    const rejected = files.filter(file => file.size > images.limitSize);
    const accepted = files.filter(file => file.size <= images.limitSize);

    return { accepted, rejected };
  }

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop: handleFilesDropped,
    // maxSize: 30 * 1024 * 1024,
    maxFiles: 10,
    accept: {
      'image/*': [],
    },
  });

  return (
    <S.Container {...getRootProps()} isDragActive={isDragActive} isDragReject={isDragReject} >
      <input
        {...getInputProps()}
      />

      {renderTextInfo(isDragActive, isDragReject)}
    </S.Container>
  );
}
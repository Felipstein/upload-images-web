import { useCallback, useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { toast } from 'react-toastify';

import * as S from './styles';

export function MyDropzone() {
  const [files, setFiles] = useState<File[]>([]);

  const renderTextInfo = (isDragActive: boolean, isDragReject: boolean) => {
    if(isDragActive) {
      return <span>Solte agora sua(s) imagen(s)!</span>
    }
    
    if(isDragReject) {
      return <span>Esse(s) arquivo(s) não é uma imagem</span>
    }
    
    return <span>Arraste suas imagens aqui ou clique para procurar</span>
  };

  const onDrop = useCallback((acceptedFiles: File[], rejectableFiles: FileRejection[]) => {
    if(rejectableFiles.length > 0) {
      toast.error(`${rejectableFiles.length} image${rejectableFiles.length > 1 ? 'ns' : 'm'} não foi enviada`);
    }

    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    maxSize: 32 * 1024 * 1024,
    maxFiles: 100,
    
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
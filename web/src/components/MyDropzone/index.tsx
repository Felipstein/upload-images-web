import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import * as S from './styles';

export function MyDropzone() {
  const renderTextInfo = (isDragActive: boolean, isDragReject: boolean) => {
    if(isDragActive) {
      return <span>Drop the files here...</span>
    }

    if(isDragReject) {
      return <span>Unsupported file</span>
    }

    return <span>Drag 'n' drop some files here, or click to select files</span>
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({ onDrop });

  return (
    <S.Container {...getRootProps()} isDragActive={isDragActive} isDragReject={isDragReject} >
      <input
        {...getInputProps()}
      />

      {renderTextInfo(isDragActive, isDragReject)}
    </S.Container>
  );
}
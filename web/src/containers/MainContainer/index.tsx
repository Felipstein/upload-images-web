import { useState } from 'react';
import { uniqueId } from 'lodash';
import { filesize } from 'filesize';

import { MyDropzone } from '../../components/MyDropzone';
import { FilesInfo } from '../../components/MyDropzone/FilesInfo';

import { FileImage } from '../../types/File.type';

import * as S from './styles';

export function MainContainer() {
  const [files, setFiles] = useState<FileImage[]>([]);

  function handleUpload(files: File[]) {
    const filesMapped: FileImage[] = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));
    
    setFiles(filesMapped);
  }

  return (
    <S.Container>
      <MyDropzone onUpload={handleUpload} />
      {files.length > 0 && (
        <FilesInfo files={files} />
      )}
    </S.Container>
  );
};
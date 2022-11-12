import { useState } from 'react';
import { toInteger, uniqueId } from 'lodash';
import { filesize } from 'filesize';

import { MyDropzone } from '../../components/MyDropzone';
import { FilesInfo } from '../../components/MyDropzone/FilesInfo';

import { FileImage } from '../../types/File.type';

import * as S from './styles';
import { api } from '../../services/api';

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

    setFiles(prevState => prevState.concat(filesMapped));
    filesMapped.forEach(processUpload);
  }

  async function processUpload(uploadedFile: FileImage) {
    const data = new FormData();

    data.append('file', uploadedFile.file, uploadedFile.name);

    const dataReturned = await api.uploadImage(data, (event) => {
      const progress = toInteger(Math.round((event.loaded * 100) / (event.total ?? 0)));

      updateFile(uploadedFile.id, { progress });
    });

    if (!dataReturned) {
      updateFile(uploadedFile.id, {
        error: true,
      });
    } else {
      updateFile(uploadedFile.id, {
        uploaded: true,
        id: dataReturned._id,
        url: dataReturned.url,
      });
    }

  }

  function updateFile(id: string, data: FileImage | any) {
    setFiles(prevState => prevState.map(
      (uploadedFile) => uploadedFile.id === id ? { ...uploadedFile, ...data } : uploadedFile,
    ));
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
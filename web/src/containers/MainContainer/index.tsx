import { useEffect, useState } from 'react';
import { toInteger, uniqueId } from 'lodash';
import { filesize } from 'filesize';
import { toast } from 'react-toastify';

import { api } from '../../services/api';
import { FileImage } from '../../types/File.type';

import { MyDropzone } from '../../components/MyDropzone';
import { FilesInfo } from '../../components/MyDropzone/FilesInfo';

import * as S from './styles';

export function MainContainer() {
  const [files, setFiles] = useState<FileImage[]>([]);

  useEffect(() => {
    async function loadImages() {
      const images = await api.loadImages();

      if (images) {
        setFiles(images.map(file => ({
          id: file._id,
          name: file.fileName,
          readableSize: filesize(file.size),
          preview: file.url,
          uploaded: true,
          url: file.url,
        })));
      }
    }

    loadImages();

    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, []);

  function handleUpload(files: File[]) {
    const filesMapped: FileImage[] = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: null,
      url: null,
      isDeleting: false,
    }));

    setFiles(prevState => prevState.concat(filesMapped));
    filesMapped.forEach(processUpload);
  }

  async function processUpload(uploadedFile: FileImage) {
    const data = new FormData();

    data.append('file', uploadedFile.file!, uploadedFile.name);

    const dataReturned = await api.uploadImage(data, (event) => {
      const progress = toInteger(Math.round((event.loaded * 100) / (event.total ?? 0)));

      updateFile(uploadedFile.id, { progress });
    });

    if (dataReturned.ok) {
      updateFile(uploadedFile.id, {
        uploaded: true,
        id: dataReturned._id,
        url: dataReturned.url,
      });
    } else {
      updateFile(uploadedFile.id, {
        error: dataReturned.errorMessage,
      });
    }

  }

  function updateFile(id: string, data: FileImage | any) {
    setFiles(prevState => prevState.map(
      (uploadedFile) => uploadedFile.id === id ? { ...uploadedFile, ...data } : uploadedFile,
    ));
  }

  async function handleDelete(id: string) {
    updateFile(id, { isDeleting: true });

    await api.deleteImage(id);
    setFiles(prevState => prevState.filter(file => file.id !== id));

    toast.success('Imagem excluída com êxito');
    updateFile(id, { isDeleting: false });
  }

  async function handleCancel(id: string) {
    setFiles(prevState => prevState.filter(file => file.id !== id));
  }

  return (
    <S.Container>
      <MyDropzone onUpload={handleUpload} />
      <S.FilesContainer>
        {files.length > 0 && (
          <FilesInfo files={files} onDelete={handleDelete} onCancel={handleCancel} />
        )}
      </S.FilesContainer>
    </S.Container>
  );
};
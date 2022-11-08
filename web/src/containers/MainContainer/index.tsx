import { MyDropzone } from '../../components/MyDropzone';
import * as S from './styles';

export function MainContainer() {
  function handleUpload(files: File[]) {

  }

  return (
    <S.Container>
      <MyDropzone onUpload={handleUpload} />
    </S.Container>
  );
};
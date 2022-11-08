import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export function MyDropzone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input
        {...getInputProps()}
      />
      <p>Drag 'n' drop some files here, or click to select files</p>
      {isDragActive && <h3>Drop the files here...</h3>}
      {isDragReject && <h3>Unsupported file</h3>}
      {isDragAccept && <h3>The file is accepted</h3>}
    </div>
  );
}
export type FileImage = {
  file: File;
  id: string;
  name: string;
  readableSize: string | number | any;
  preview: string;
  uploaded: boolean;
  error: string | null;
  progress: number;
  url: string | null;
  isDeleting: boolean;
}
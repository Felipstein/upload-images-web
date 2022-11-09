export type FileImage = {
  file: File;
  id: string;
  name: string;
  readableSize: string | number | any;
  preview: string;
  uploaded: boolean;
  error: boolean;
  progress: number;
  url: string | null;
}
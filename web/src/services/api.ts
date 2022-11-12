import { toast } from 'react-toastify';
import axios, { Axios, AxiosError, AxiosInstance, AxiosProgressEvent } from "axios";

class API {

  readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3333',
    });
  }

  async uploadImage(data: FormData, onUploadProgress: ((progressEvent: AxiosProgressEvent) => void) | undefined) {
    try {
      const { data: dataReturned } = await this.api.post('/images', data, {
        onUploadProgress
      });

      return dataReturned;
    } catch (err: AxiosError | Error | any) {
      if (err instanceof AxiosError) {
        console.log(err);
        toast.error(err.response?.data.message);
      } else {
        toast.error(err.message || 'Erro desconhecido.');
      }

      return null;
    }
  }

}

const api = new API();

export { api };
import { toast } from 'react-toastify';
import axios, { Axios, AxiosError, AxiosInstance, AxiosProgressEvent, AxiosRequestConfig } from "axios";
import { delay } from '../utils/delay';

class API {

  readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3333',
    });
  }

  async catchErrors(err: AxiosError | Error | any) {
    if (err instanceof AxiosError) {
      const message = err.response?.data.message || 'Erro desconhecido, tente novamente mais tarde.';
      toast.error(message);
      return { errorMessage: message };
    } else {
      const message = err.message || 'Erro desconhecido, tente novamente mais tarde.';
      toast.error(message);
      return { errorMessage: message };
    }
  }

  async loadImages(): Promise<any[] | undefined> {
    try {
      const { data: images } = await this.api.get('/images');

      return images;
    } catch (err) {
      this.catchErrors(err);
    }
  }

  async uploadImage(data: FormData, onUploadProgress: ((progressEvent: AxiosProgressEvent) => void) | undefined) {
    try {
      const { data: dataReturned } = await this.api.post('/images', data, {
        onUploadProgress
      });

      return {
        ok: true,
        ...dataReturned,
      };
    } catch (err: any) {
      return this.catchErrors(err);
    }
  }

  async deleteImage(id: string) {
    try {
      await this.api.delete(`/images/${id}`);
    } catch (err: any) {
      return this.catchErrors(err);
    }
  }

}

const api = new API();

export { api };
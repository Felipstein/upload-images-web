import { toast } from 'react-toastify';
import axios, { Axios, AxiosError, AxiosInstance, AxiosProgressEvent, AxiosRequestConfig } from "axios";

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
      await this.api.delete(`/posts/${id}`);
    } catch (err: any) {
      return this.catchErrors(err);
    }
  }

}

const api = new API();

export { api };
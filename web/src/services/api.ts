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

      return {
        ok: true,
        ...dataReturned,
      };
    } catch (err: AxiosError | Error | any) {
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
  }

}

const api = new API();

export { api };
import { NextFunction, Request, Response } from "express";
import { APIError } from "../errors/APIError";

export function errorHandler(err: Error | APIError | any, req: Request, res: Response, next: NextFunction) {
  if (err) {
    if (err instanceof APIError) {
      return res.status(err.statusCode).json({ message: err.message });
    }

    console.error('#### An unexpected error was returned ####');
    console.error(`${err.name}: ${err.message}`);
    console.error(err.stack);

    return res.status(500).json({ message: 'Houve um erro inesperado no nosso servidor, tente novamente mais tarde.' });
  }
}
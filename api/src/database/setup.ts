import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

export async function setupDatabase(req: Request, res: Response, next: NextFunction) {
  
  const { DB_CONNECTION: UR } = process.env;

  if(!UR) {
    throw new Error('Falha ao conectar no banco de dados: URI/URL não informada.');
  }

  try {
    await mongoose.connect(UR);
    console.log('Conexão com banco de dados!');

    next();
  } catch (err: any) {
    console.error('Falha ao conectar no banco de dados:', err.message ?? 'não informado');
  }
}
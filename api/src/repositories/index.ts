import { MongoPostRepository } from "./impl/MongoPostRepository";

const currentRepository = new MongoPostRepository();

export { currentRepository };
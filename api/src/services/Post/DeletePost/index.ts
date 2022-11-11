import { currentRepository } from "../../../repositories";
import { DeletePostController } from "./DeletePostController";
import { DeletePostUseCases } from "./DeletePostUseCases";

export function deletePostFactory() {
  const deletePostUseCases = new DeletePostUseCases(currentRepository);
  const deletePostController = new DeletePostController(deletePostUseCases);

  return { controller: deletePostController, useCases: deletePostUseCases };
}
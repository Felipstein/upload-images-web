import { currentRepository } from "../../../repositories";
import { ListPostController } from "./ListPostController";
import { ListPostUseCases } from "./ListPostUseCases";

export function listPostFactory() {
  const listPostUseCases = new ListPostUseCases(currentRepository);
  const listPostController = new ListPostController(listPostUseCases);

  return { controller: listPostController, useCases: listPostUseCases };
}
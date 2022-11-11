import { currentRepository } from "../../../repositories";
import { ListAllPostsController } from "./ListAllPostsController";
import { ListAllPostsUseCases } from "./ListAllPostsUseCases";

export function listAllPostsFactory() {
  const listAllPostsUseCases = new ListAllPostsUseCases(currentRepository);
  const listAllPostsController = new ListAllPostsController(listAllPostsUseCases);

  return { controller: listAllPostsController, useCases: listAllPostsUseCases };
}
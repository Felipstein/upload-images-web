import { CreatePostController } from './CreatePostController';
import { currentRepository } from '../../../repositories';
import { CreatePostUseCases } from './CreatePostUseCases';

export function createPostFactory() {
  const createPostUseCases = new CreatePostUseCases(currentRepository);
  const createPostController = new CreatePostController(createPostUseCases);

  return { controller: createPostController, useCases: createPostUseCases };
}
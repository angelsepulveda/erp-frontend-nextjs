import { CreateDocumentTypeRepository } from "../domain/repositories/CreateDocumentTypeRepository";

export const createDocumentTypeService = (
  repository: CreateDocumentTypeRepository
) => {
  return {
    handle: async (name: string, code?: string, description?: string) => {
      await repository.handle({
        id: "",
        name,
        code,
        description,
      });
    },
  };
};

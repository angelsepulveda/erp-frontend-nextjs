import axiosInterceptorInstance from "@/core/infrastructure/interceptors/axiosInterceptorInstance";
import { DocumentType } from "../../domain/entities/DocumentType";
import { CreateDocumentTypeRepository } from "../../domain/repositories/CreateDocumentTypeRepository";

export const CreateDocumentTypeHttpRepository =
  (): CreateDocumentTypeRepository => {
    return {
      handle: async (documentType: DocumentType) => {
        try {
          const url = "document-types/create";
          const body = {
            name: documentType.name,
            code: documentType.code,
            description: documentType.description,
          };
          console.log(body);
          await axiosInterceptorInstance.post(url, body);
        } catch (error) {
          console.log(error);
        }
      },
    };
  };

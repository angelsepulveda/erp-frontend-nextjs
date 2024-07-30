import { DocumentType } from "../entities/DocumentType";

export interface CreateDocumentTypeRepository {
  handle(documentType: DocumentType): Promise<void>;
}

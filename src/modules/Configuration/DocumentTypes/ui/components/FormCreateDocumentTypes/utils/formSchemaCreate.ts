import { z } from "zod";

export const formSchemaCreateDocumentType = z.object({
  name: z
    .string()
    .min(2, {
      message: "Debe tener al menos 2 caracteres",
    })
    .max(20, {
      message: "No debe superar los 20 caracteres",
    }),
  code: z.string().max(50, {
    message: "No debe superar los 50 caracteres",
  }),
  description: z.string().max(256, {
    message: "No debe superar los 256 caracteres",
  }),
});

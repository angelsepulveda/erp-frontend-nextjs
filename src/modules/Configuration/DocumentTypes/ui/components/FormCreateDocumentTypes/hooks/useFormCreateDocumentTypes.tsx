import { createDocumentTypeService } from "@/modules/Configuration/DocumentTypes/application";
import { CreateDocumentTypeHttpRepository } from "@/modules/Configuration/DocumentTypes/infrastructure";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { formSchemaCreateDocumentType } from "../utils";
import { toast } from "@/core/ui/components";

const repository = CreateDocumentTypeHttpRepository();
const service = createDocumentTypeService(repository);

type TUseFormCreateDocumentTypesProps = {
  handleCloseModal: () => void;
};
export const useFormCreateDocumentTypes = ({
  handleCloseModal,
}: TUseFormCreateDocumentTypesProps) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (values: z.infer<typeof formSchemaCreateDocumentType>) =>
      service.handle(values.name, values.code, values.name),
  });

  const form = useForm<z.infer<typeof formSchemaCreateDocumentType>>({
    resolver: zodResolver(formSchemaCreateDocumentType),
    defaultValues: {
      name: "",
      description: "",
      code: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchemaCreateDocumentType>) => {
    try {
      mutate(values);
      toast({
        title: "Se ha creado correctamente",
      });
      handleCloseModal();
    } catch (error) {
      toast({
        title: "Ocurrio un error",
        variant: "destructive",
      });
    }
  };

  return {
    form,
    onSubmit,
    isLoading,
  };
};

"use client";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/core/ui/components";
import { useFormCreateDocumentTypes } from "./hooks";
import { Loader } from "lucide-react";

type TFormCreateDocumentTypesProps = {
  handleCloseModal: () => void;
};

export const FormCreateDocumentTypes = ({
  handleCloseModal,
}: TFormCreateDocumentTypesProps) => {
  const { form, onSubmit, isLoading } = useFormCreateDocumentTypes({
    handleCloseModal,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Código</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el código" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese una descripción" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button type="submit" size="lg" disabled={isLoading}>
            {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            Crear
          </Button>
          <Button
            type="button"
            onClick={() => handleCloseModal()}
            variant="outline"
            size="lg"
            disabled={isLoading}
          >
            Cerrar
          </Button>
        </div>
      </form>
    </Form>
  );
};

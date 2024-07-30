"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/core/ui/components";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { FormCreateDocumentTypes } from "../FormCreateDocumentTypes";

export const HeaderDocumentTypes = () => {
  const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModalCreate(false);
  };

  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl">Lista de tipos de documentos</h2>
      <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
        <DialogTrigger asChild>
          <Button>
            <Plus width={15} height={15} />
            Agregar
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-m-[625px]">
          <DialogHeader>
            <DialogTitle>Crear tipo de documento</DialogTitle>
          </DialogHeader>
          <FormCreateDocumentTypes handleCloseModal={handleCloseModal} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

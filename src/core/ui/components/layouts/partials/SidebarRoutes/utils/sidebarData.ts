import { BadgeCent, Cog, ShoppingCart, Warehouse } from "lucide-react";

export interface IItemsSidebar {
  label: string;
  href: string;
}

export interface IDataSidebar {
  icon: any;
  label: string;
  items: IItemsSidebar[];
}

export const dataGeneralSidebar: IDataSidebar[] = [
  {
    icon: Warehouse,
    label: "Almacén",
    items: [
      {
        label: "Categorías",
        href: "/categories",
      },
      {
        label: "Productos",
        href: "/products",
      },
      {
        label: "Marcas",
        href: "/brachs",
      },
      {
        label: "Unidades de Medidas",
        href: "/unidades",
      },
    ],
  },
  {
    icon: ShoppingCart,
    label: "Compras",
    items: [
      {
        label: "Ingresos",
        href: "/ingresos",
      },
      {
        label: "Proveedores",
        href: "/providers",
      },
    ],
  },
  {
    icon: BadgeCent,
    label: "Ventas",
    items: [
      {
        label: "Pedidos",
        href: "/pedidos",
      },
      {
        label: "Ventas",
        href: "/sales",
      },
      {
        label: "Cotizaciones",
        href: "/sales",
      },
    ],
  },
  {
    icon: Cog,
    label: "Configuraciones",
    items: [
      {
        label: "Tipos de Documentos",
        href: "/document-types",
      },
      {
        label: "Tipos de Comprobantes",
        href: "/vouchers",
      },
      {
        label: "Sucursales",
        href: "/branch",
      },
    ],
  },
];

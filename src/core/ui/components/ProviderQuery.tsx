"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

type TProviderQueryProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export const ProviderQuery = ({ children }: TProviderQueryProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

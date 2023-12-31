"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import * as React from "react";

export function Provider({ children, ...props }: ThemeProviderProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <React.Fragment>
      <AnimatePresence>
        <QueryClientProvider client={queryClient}>
          <NextThemesProvider {...props}>{children}</NextThemesProvider>
        </QueryClientProvider>
      </AnimatePresence>
    </React.Fragment>
  );
}

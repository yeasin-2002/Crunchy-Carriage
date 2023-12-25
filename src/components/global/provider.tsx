"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

export function Provider({ children, ...props }: ThemeProviderProps) {
  return (
    <React.Fragment>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </React.Fragment>
  );
}

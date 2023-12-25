import type { Metadata } from "next";


import { Nav } from "@/components/global/Nav";
import { Provider } from "@/components/global/provider";
import { inter } from "@/fonts";
import "@/styles/globals.css";


export const metadata: Metadata = {
  title: "Crunchy Carriage",
  description:
    "Crunchy Carriage is a restaurant and Food delivery service. It is a web application that allows users to order food from the comfort of their homes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` selection:bg-crimson selection:text-white ${inter.className}`}
      >
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}

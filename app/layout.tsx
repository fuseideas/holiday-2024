// app/layout.tsx
import { ReactNode } from "react";
import ApolloWrapper from "@/app/lib/apolloProvider";
import "@/app/globals.css";


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}

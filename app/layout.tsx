// app/layout.tsx
import { ReactNode } from "react";
import ApolloWrapper from "@/app/lib/apolloProvider";
import "@/app/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Happy Holidays from Fuseideas",
  description: "Explore our interactive calendar for holiday traditions from the Fuseideas team.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {/* External Fonts */}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/inj6hbr.css"
        />

        {/* App's Global Wrappers */}
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}

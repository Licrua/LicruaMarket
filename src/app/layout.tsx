import type { Metadata } from "next";
import "./globals.css";
import Container from "@/components/generalComponents/Container";
import Header from "@/components/header/Header";


export const metadata: Metadata = {
  title: "Licrua Shop",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
      >
		<Container>
		<Header/>
        {children}
		</Container>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import PagesHeader from "@/components/layout/pagesHeader/PagesHeader";
import { getServerSession } from "next-auth";
import { Providers } from "./Providers";
export const metadata: Metadata = {
  title: "Todate",
  description: "best website to set your todos",
};
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`antialiased ${ubuntu.className}`}>
        <Providers>
          <Header />
          <PagesHeader
            isAuthed={session?.user !== null}
            serverHost={process.env.SERVER_HOST!}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}

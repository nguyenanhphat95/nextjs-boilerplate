import type { Metadata } from "next";
import { AuthProvider } from "@/shared/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo app",
  description: "This is a todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <h1 className="text-6xl font-bold text-center text-purple-600">
            TO DO APP
          </h1>
          <div className="mt-10">
            <div className="flex justify-center">
              <div className="basis-6/12">
                <AuthProvider>
                  {children}
                </AuthProvider>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiago Affede | Portfolio",
  description:
    "Desarrollador web especializado en React, Next.js y TypeScript. Proyectos, habilidades y contacto.",
  openGraph: {
    title: "Thiago Affede | Portfolio",
    description: "Desarrollador web especializado en React, Next.js y TypeScript.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

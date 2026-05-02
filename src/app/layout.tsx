import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edgar López Rodríguez · Asesor Financiero",
  description:
    "Asesor financiero especializado en planeación patrimonial y gestión estratégica de inversiones.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
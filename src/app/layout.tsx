import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Laura Fotografía | Portafolio Profesional de Fotografía",
  description:
    "Explora el impresionante trabajo fotográfico de Laura, capturando momentos de belleza y emoción.",
  openGraph: {
    title: "Laura Fotografía",
    description:
      "Explora el impresionante trabajo fotográfico de Laura, capturando momentos de belleza y emoción.",
    url: "https://www.laurafotografia.com",
    images: [
      {
        url: "https://i.pinimg.com/736x/3d/63/2e/3d632e9d411f296deee627fef855e7cf.jpg",
        width: 800,
        height: 600,
        alt: "Laura Fotografía",
      },
    ],
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={crimsonText.className}>
          <div className="flex justify-center">
            <div className="max-w-[1800px]">{children}</div>
          </div>
        </body>
      </html>
    </>
  );
}

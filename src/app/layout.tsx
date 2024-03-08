import "@/lib/styles/global.css";
import { ReactNode } from "react";
import { Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { cn } from "@/lib/utils/utils";

const roboto = Roboto({
  preload: true,
  display: "swap",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={cn("bg-blue-50 font-sans antialiased", roboto.variable)}
      >
        <NextTopLoader color={"#fdc127"} showSpinner={false} />
        <div>{children}</div>
      </body>
    </html>
  );
}

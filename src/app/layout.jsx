import { Inter } from "next/font/google";
import "@/styles/globals.css";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProvider,
} from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bus App",
  description: "Bus Tracking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Geist_Mono } from "next/font/google";
import "./globals.css";

const g = Geist_Mono({  
  subsets: ["latin"],
});

export const metadata = {
  title: "MRKETR Labs",
  description: "We Build No BS Applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${g.variable} ${g.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

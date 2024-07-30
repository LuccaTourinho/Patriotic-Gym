import type { Metadata } from "next";
import { 
  Merriweather, 
  Roboto_Slab, 
  Playfair_Display,
  Oswald,
  Raleway 
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils"; 

// const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: [ "300", "400", "700", "900" ],
  variable: "--font-merriweather", 
});
const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: [ "100", "200", "300", "400", "500", "600", "700", "800", "900" ],
  variable: "--font-roboto-slab",
});
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700", "800", "900" ],	
  variable: "--font-playfair-display",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: [ "200", "300", "400", "500", "600", "700" ],
  variable: "--font-oswald",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: [ "100", "200", "300", "400", "500", "600", "700", "800", "900" ],
  variable: "--font-raleway",
});

const fonts = cn(
  merriweather.variable, 
  roboto_slab.variable, 
  playfair_display.variable, 
  oswald.variable, 
  raleway.variable
);

export const metadata: Metadata = {
  title: "Patriot Gym",
  description: "A patriotic themed gym website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts + `w-full max-w-[1920px] mx-auto bg-[#0A3161]`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

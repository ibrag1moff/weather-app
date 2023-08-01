// next
import "./globals.css";
import { Poppins } from "next/font/google";

// react skeleton loading
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
    title: "Weather App",
    description: "Created by ibrag1moff",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} bg-main bg-cover h-screen`}>
                <SkeletonTheme baseColor="#333" highlightColor="#444">
                    {children}
                </SkeletonTheme>
            </body>
        </html>
    );
}

import "./globals.css";


export const metadata = {
  title: "harixn",
  description: "Portfolio-2025 by Harinarayanan K P",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

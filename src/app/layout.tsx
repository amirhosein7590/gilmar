import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-full flex flex-col overflow-x-hidden bg-[#F5F8FA]">
        {children}
      </body>
    </html>
  );
}

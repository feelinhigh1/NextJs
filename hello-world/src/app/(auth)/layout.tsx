export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer
          style={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            textAlign: "center",
          }}
        >
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}

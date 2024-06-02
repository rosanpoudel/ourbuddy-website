import "../styles/css/main.css";

export const metadata = {
  title: "Our Buddy",
  description: "magic for broker agents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

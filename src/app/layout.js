export const metadata = {
  title: "Subcryption - Home Page",
  description: "This is the homepage of the Subcryption Site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

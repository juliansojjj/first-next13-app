import '../styles/globals.css'
import HeaderLayout from "./components/HeaderLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <HeaderLayout/>
        {children}
      </body>
    </html>
  )
}

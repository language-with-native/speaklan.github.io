import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'Speaklan',
  description: 'Language with tutor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="AW-16787315844" />
    </html>
  )
}

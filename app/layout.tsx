import { NextFont } from '@next/font'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'

const fontFamily : NextFont = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar 
          fontFamily={fontFamily}
        />
        <div className='global-content' >
          {children}
        </div>
      </body>
    </html>
  )
}

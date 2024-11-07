import './globals.css'
import type {Metadata} from 'next'
import React from 'react'

export const metadata: Metadata={
  title:'Pruebas',
  description: 'Descripcion de estas pruebas',
}

interface RootLayoutProps{
  children: React.ReactNode
}


export default function RootLayout({ children }: RootLayoutProps ) {
    return (
      <html lang="en">
        <body>
          <main className='min-h-screen flex flex-col items-center justify-center '>
            {children}
          </main>
        </body>
      </html>
    );
  }
    
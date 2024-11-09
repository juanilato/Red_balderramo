import './globals.css'
import type {Metadata} from 'next'
import React from 'react'
import SessionAuthProvider from '../context/SessionAuthProvider'

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
            <SessionAuthProvider>{children}</SessionAuthProvider>
          </main>
        </body>
      </html>
    );
  }
    
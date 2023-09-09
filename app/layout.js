import './globals.css'
import { Montserrat } from 'next/font/google'

import Sidebar from '@/components/Home page components/Sidebar'
import Player from '@/components/Home page components/Player'

const montserrat = Montserrat({ 
  subsets: ['latin'],
})

export const metadata = {
  title: 'Spotify Clone by Kohi',
  description: 'Kohi prod.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <main className="p-2 bg-black min-h-screen max-h-screen flex flex-col tracking-tight">
      <div className='flex flex-row'>
        <Sidebar/>
        {children}
      </div>
      <div>
        <Player/>
      </div>
    </main>
        
        </body>
    </html>
  )
}

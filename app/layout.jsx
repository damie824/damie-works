'use client'

import '@/style/fonts.scss'
import '@/style/global/global.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

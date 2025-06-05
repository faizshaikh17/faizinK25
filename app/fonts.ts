import localFont from 'next/font/local'

export const gothamBold = localFont({
  src: './fonts/gotham-bold-webfont.woff2',
  weight: '700',
  style: 'normal',
  variable: '--font-gotham',
  display: 'swap',
})

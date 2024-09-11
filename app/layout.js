import './globals.css'
import { GTMnoscript } from './lib/GTMnoscript'
import { GAscript } from './lib/GAscript'
import { GTMscript } from './lib/GTMscript'
import { Anton } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import {Footer} from './components/Footer'
const open_sans = Open_Sans(
  {
      subsets:['latin'],
      weight: ['400', '600', '700', '800'],
      variable: '--font-open-sans'
  }
)
const anton = Anton(
  {
      subsets:['latin'],
      weight: '400',
      variable: '--font-anton'
      
  }
)
export const metadata = {
  title:process.env.NEXT_PUBLIC_PAGE_TITLE ,
  description: process.env.NEXT_PUBLIC_PAGE_DESCRIPTION ,
  ogDescription: process.env.NEXT_PUBLIC_PAGE_OGDESCRIPTION
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/63eb23b7e33e0b09a85385b4/fd64a92c-b011-4814-9310-97bd1820ddd5/favicon.ico"/>
    <meta property="og:description" content={process.env.NEXT_PUBLIC_PAGE_CONTENT}></meta>
      <GTMscript/>
      <GAscript />
    </head>
      <body className={`${anton.className} ${anton.variable} ${open_sans.variable}`}>
        {children}
        <GTMnoscript />
        <footer>
          <div className='footer-content-container'>
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_163_281)">
                <path d="M9 18.5C4.03749 18.5 0 14.4625 0 9.5C0 4.53749 4.03749 0.5 9 0.5C13.9625 0.5 18 4.53749 18 9.5C18 14.4625 13.9625 18.5 9 18.5ZM9 1.62501C4.65765 1.62501 1.12501 5.15765 1.12501 9.5C1.12501 13.8424 4.65765 17.375 9 17.375C13.3424 17.375 16.875 13.8424 16.875 9.5C16.875 5.15765 13.3424 1.62501 9 1.62501Z" fill="black"/>
                <path d="M9.00002 14C6.51876 14 4.5 11.9813 4.5 9.50002C4.5 7.01872 6.51872 5 9.00002 5C10.22 5 11.3615 5.48011 12.2152 6.35187L11.411 7.13847C10.7711 6.48477 9.91522 6.12496 9.00002 6.12496C7.13893 6.12496 5.62501 7.63889 5.62501 9.49998C5.62501 11.3611 7.13893 12.875 9.00002 12.875C9.91465 12.875 10.7705 12.5152 11.411 11.8615L12.2141 12.6492C11.361 13.5205 10.2195 14 9.00002 14Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_163_281">
                <rect width="18" height="18" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
                </defs> 
              </svg>
              <span className={`${open_sans.className} footer-text`}>COPYRIGHT 2024. STOP SWAMPING GPS</span>
          </div>
      </footer>
      </body>
    </html>
  )
}

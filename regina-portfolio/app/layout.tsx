import '../app/styles/globals.scss';
import { Public_Sans, Montserrat } from 'next/font/google';

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  weight: ['100','200', '300', '400'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100','200', '300', '400'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${publicSans.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}

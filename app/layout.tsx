// app/layout.tsx
import './styles/global.scss';
import { Public_Sans, Montserrat } from 'next/font/google';

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Regina Pompeo | Desenvolvedora Full Stack',
  description: 'Portfólio de Regina Pompeo — projetos, habilidades e experiência em desenvolvimento web full stack, React, Next.js e automações.',
  keywords: ['desenvolvedora full stack', 'React', 'Next.js', 'portfólio', 'automação', 'front-end', 'back-end', 'programação'],
  authors: [{ name: 'Regina Pompeo', url: 'https://reginapompeo.dev' }],
  creator: 'Regina Pompeo',
  publisher: 'Regina Pompeo',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Regina Pompeo | Desenvolvedora Full Stack',
    description: 'Confira meus projetos, habilidades e experiência em desenvolvimento web full stack, React, Next.js e automações.',
    url: 'https://reginapompeo.dev',
    siteName: 'Regina Pompeo Portfólio',
    images: [
      {
        url: 'https://reginapompeo.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Regina Pompeo - Desenvolvedora Full Stack',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${publicSans.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsProvider from '../../providers/StyledComponentsProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://afterdinnerclub.kr'),
  title: '새해 첫 곡 대신 정해드려요',
  description: '2025년 내 소원을 이뤄줄 밴드곡 추천',
  openGraph: {
    title: '2025년 새해 소원 이뤄드려요',
    description: '새해 첫 곡, 밴드곡으로 추천 받아보기',
    images: {
      url: '/images/og_image.jpeg',
      width: 1200,
      height: 630,
      alt: 'afterdinnerclub',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <StyledComponentsProvider>
        <body className='min-h-[100dvh] max-h-[100dvh] bg-background'>
          <main className='mx-auto max-w-md bg-white'>{children}</main>
        </body>
      </StyledComponentsProvider>
    </html>
  );
}

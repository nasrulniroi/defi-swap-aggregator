import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/Providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'DeFi Swap Aggregator | Best Rates Across DEXes',
  description:
    'Find the best swap rates across Uniswap, SushiSwap, Curve, and 1inch. Optimal routing, minimal slippage, and gas-efficient swaps.',
  keywords: ['DeFi', 'swap', 'aggregator', 'DEX', 'Uniswap', 'SushiSwap', 'Curve', '1inch', 'best rates'],
  authors: [{ name: 'DeFi Swap Aggregator Team' }],
  openGraph: {
    type: 'website',
    title: 'DeFi Swap Aggregator',
    description: 'Find the best swap rates across all major DEXes',
    siteName: 'DeFi Swap Aggregator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFi Swap Aggregator',
    description: 'Find the best swap rates across all major DEXes',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-surface font-sans">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

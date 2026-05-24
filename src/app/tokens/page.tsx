'use client';
import { TokenList } from '@/components/tokens/TokenList';
export default function TokensPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Tokens</h1>
      <TokenList />
    </div>
  );
}

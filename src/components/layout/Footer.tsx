import Link from 'next/link';
export function Footer() {
  return (
    <footer className="border-t border-surface-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-3 text-gradient">SwapAgg</h3>
            <p className="text-sm text-muted-foreground">Find the best DeFi swap rates across all major DEXes.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Protocol</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/pools" className="hover:text-foreground">Pools</Link></li>
              <li><Link href="/routes" className="hover:text-foreground">Routes</Link></li>
              <li><Link href="/analytics" className="hover:text-foreground">Analytics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground">API</a></li>
              <li><a href="#" className="hover:text-foreground">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Discord</a></li>
              <li><a href="#" className="hover:text-foreground">Twitter</a></li>
              <li><a href="#" className="hover:text-foreground">Telegram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-surface-border text-center text-sm text-muted-foreground">
          © 2024 DeFi Swap Aggregator. All rights reserved. MIT License.
        </div>
      </div>
    </footer>
  );
}

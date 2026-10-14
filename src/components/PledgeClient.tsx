"use client";

import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";
import { verifyMessage } from "viem";
import { walletSetup, type WalletSetup } from "@/lib/web3";

// The pledge, client side only. Signing is an ordinary wallet message signature (EIP-191
// personal_sign): no transaction, no gas, no contract. The signature is checked against the
// connected wallet right here in the tab and then forgotten: nothing is sent anywhere or saved, and
// no address or signature is ever shown on the page.

export const PLEDGE_LINES = [
  "Psychedelic Policy Reform: a pledge of support (preview)",
  "",
  "I support protecting the sincere religious use of sacraments under the Religious Freedom Restoration Act, and gathering and sharing the evidence in plain words.",
  "",
  "This is a preview. Signing costs nothing, sends nothing and records nothing.",
];

const queryClient = new QueryClient();

export default function PledgeClient() {
  const [setup, setSetup] = useState<WalletSetup | null>(null);
  useEffect(() => setSetup(walletSetup()), []);
  if (!setup) return <p className="status">Getting the wallet tools ready…</p>;
  return (
    <WagmiProvider config={setup.config}>
      <QueryClientProvider client={queryClient}>
        <Steps setup={setup} />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

function Steps({ setup }: { setup: WalletSetup }) {
  const { address, isConnected } = useAccount();
  const { connectors, connect, isPending: connecting, error: connectError } = useConnect();
  const { disconnect } = useDisconnect();
  const { signMessageAsync, isPending: signing } = useSignMessage();
  const [hasBrowserWallet, setHasBrowserWallet] = useState(false);
  const [result, setResult] = useState<"" | "verified" | "mismatch" | "declined" | "failed">("");

  useEffect(() => {
    setHasBrowserWallet(typeof window !== "undefined" && !!(window as unknown as { ethereum?: unknown }).ethereum);
  }, []);
  useEffect(() => setResult(""), [address]);

  const connectNow = () => {
    if (setup.modal) {
      setup.modal.open();
      return;
    }
    const c = connectors[0];
    if (c) connect({ connector: c });
  };

  const sign = async () => {
    if (!address) return;
    const message = [...PLEDGE_LINES, `Signed on: ${new Date().toISOString().slice(0, 10)}`].join("\n");
    try {
      const signature = await signMessageAsync({ message });
      const ok = await verifyMessage({ address, message, signature });
      setResult(ok ? "verified" : "mismatch");
    } catch (e) {
      const msg = String((e as Error)?.message ?? e);
      setResult(/reject|denied|cancel/i.test(msg) ? "declined" : "failed");
    }
  };

  const canConnect = setup.appkit || hasBrowserWallet;

  return (
    <ol className="steps">
      <li className="done">
        <h3>Read the pledge</h3>
        <p>It&rsquo;s above. Signing it says you support it; it doesn&rsquo;t say anything about you.</p>
      </li>
      <li className={isConnected ? "done" : ""}>
        <h3>Connect a wallet</h3>
        {isConnected ? (
          <>
            <p className="status ok">
              <i className="ph ph-check-circle" aria-hidden="true"></i> A wallet is connected. Its address stays in your wallet; this page doesn&rsquo;t show or keep it.
            </p>
            <button type="button" className="btn" onClick={() => (setup.modal ? setup.modal.open() : disconnect())}>
              <i className="ph ph-plugs" aria-hidden="true"></i> {setup.modal ? "Manage the connection" : "Disconnect"}
            </button>
          </>
        ) : (
          <>
            <p>
              {setup.appkit
                ? "One button for a browser wallet, a phone wallet (by QR code) or email sign-in."
                : hasBrowserWallet
                  ? "Your browser has a wallet, so you can try the pledge with it."
                  : "No browser wallet was found in this browser."}
            </p>
            <button type="button" className="btn primary" onClick={connectNow} disabled={!canConnect || connecting}>
              <i className="ph ph-wallet" aria-hidden="true"></i> {connecting ? "Connecting…" : setup.appkit ? "Connect a wallet" : "Connect your browser wallet"}
            </button>
            {!setup.appkit && (
              <p className="status warn" role="status">
                <i className="ph ph-info" aria-hidden="true"></i> Phone wallets and email sign-in arrive once this preview&rsquo;s wallet-connect project is switched on.
                {!hasBrowserWallet && " Until then, a browser wallet extension is the way to try it."}
              </p>
            )}
            {connectError && (
              <p className="status warn" role="status">
                The wallet didn&rsquo;t connect. Nothing happened, and you can try again.
              </p>
            )}
          </>
        )}
      </li>
      <li className={result === "verified" ? "done" : ""}>
        <h3>Sign it</h3>
        <p>Your wallet shows the pledge and asks you to sign. It&rsquo;s a message, not a transaction: there&rsquo;s no gas and no contract.</p>
        <div className="actions" style={{ marginBottom: "0.4rem" }}>
          <button type="button" className="btn primary" onClick={sign} disabled={!isConnected || signing}>
            <i className="ph ph-signature" aria-hidden="true"></i> {signing ? "Waiting for your wallet…" : "Sign the pledge"}
          </button>
          {result && (
            <button type="button" className="btn" onClick={() => setResult("")}>
              <i className="ph ph-arrow-counter-clockwise" aria-hidden="true"></i> Start over
            </button>
          )}
        </div>
        <p className={`status ${result === "verified" ? "ok" : "warn"}`} role="status" aria-live="polite">
          {result === "verified" && "Signed, and checked: the signature matches your connected wallet. It stayed in this tab: nothing was sent, and nothing was recorded. Thank you."}
          {result === "mismatch" && "Your wallet returned a signature that didn't match. Nothing was recorded."}
          {result === "declined" && "You chose not to sign. Nothing happened, and nothing was recorded."}
          {result === "failed" && "The wallet couldn't sign just now. Nothing was recorded, and you can try again."}
        </p>
      </li>
    </ol>
  );
}

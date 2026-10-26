"use client";

import { useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";
import { verifyMessage } from "viem";
import { generatePrivateKey, privateKeyToAccount, type PrivateKeyAccount } from "viem/accounts";
import { walletSetup, type WalletSetup } from "@/lib/web3";

// The pledge, client side only. Signing is an ordinary wallet message signature (EIP-191
// personal_sign): no transaction, no gas, no contract. The signature is checked against the
// connected wallet right here in the tab and then forgotten: nothing is sent anywhere or saved, and
// no address or signature is ever shown on the page.
//
// The practice wallet is for visitors without a wallet yet. A throwaway key is made in this tab
// (viem's generatePrivateKey) and held only in a React ref: never in wagmi (which would persist the
// connection to localStorage), never in any storage, never shown. It can sign a message and nothing
// else: it has no network connection, so it can't send a transaction. Reload or close the tab, or
// press "End practice", and it's gone.

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
  const [result, setResult] = useState<"" | "verified" | "practice" | "mismatch" | "declined" | "failed">("");
  // The practice wallet: memory only (see the note at the top).
  const practice = useRef<PrivateKeyAccount | null>(null);
  const [practicing, setPracticing] = useState(false);
  const [practiceSigning, setPracticeSigning] = useState(false);

  useEffect(() => {
    setHasBrowserWallet(typeof window !== "undefined" && !!(window as unknown as { ethereum?: unknown }).ethereum);
  }, []);
  useEffect(() => setResult(""), [address]);
  // A real wallet always wins: connecting one ends the practice.
  useEffect(() => {
    if (isConnected && practice.current) {
      practice.current = null;
      setPracticing(false);
    }
  }, [isConnected]);

  const startPractice = () => {
    practice.current = privateKeyToAccount(generatePrivateKey());
    setPracticing(true);
    setResult("");
  };
  const endPractice = () => {
    practice.current = null;
    setPracticing(false);
    setResult("");
  };

  const connectNow = () => {
    if (setup.modal) {
      setup.modal.open();
      return;
    }
    const c = connectors[0];
    if (c) connect({ connector: c });
  };

  const sign = async () => {
    const message = [...PLEDGE_LINES, `Signed on: ${new Date().toISOString().slice(0, 10)}`].join("\n");
    const acct = practice.current;
    if (practicing && acct) {
      setPracticeSigning(true);
      try {
        const signature = await acct.signMessage({ message });
        const ok = await verifyMessage({ address: acct.address, message, signature });
        setResult(ok ? "practice" : "mismatch");
      } catch {
        setResult("failed");
      } finally {
        setPracticeSigning(false);
      }
      return;
    }
    if (!address) return;
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
  const ready = isConnected || practicing;

  return (
    <ol className="steps">
      <li className="done">
        <h3>Read the pledge</h3>
        <p>It&rsquo;s above. Signing it says you support it; it doesn&rsquo;t say anything about you.</p>
      </li>
      <li className={ready ? "done" : ""}>
        <h3>Connect a wallet</h3>
        {practicing ? (
          <>
            <p className="status ok">
              <i className="ph ph-flask" aria-hidden="true"></i> A practice wallet is ready. It isn&rsquo;t a real wallet: it can&rsquo;t hold or send anything, it lives only in this tab, and it&rsquo;s gone when you close or reload the page.
            </p>
            <button type="button" className="btn" onClick={endPractice}>
              <i className="ph ph-x-circle" aria-hidden="true"></i> End practice
            </button>
          </>
        ) : isConnected ? (
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
            <div className="actions" style={{ marginBottom: "0.4rem" }}>
              <button type="button" className="btn primary" onClick={connectNow} disabled={!canConnect || connecting}>
                <i className="ph ph-wallet" aria-hidden="true"></i> {connecting ? "Connecting…" : setup.appkit ? "Connect a wallet" : "Connect your browser wallet"}
              </button>
              <button type="button" className="btn" onClick={startPractice} aria-describedby="practice-note">
                <i className="ph ph-flask" aria-hidden="true"></i> Try it with a practice wallet
              </button>
            </div>
            <p className="status" id="practice-note">
              No wallet yet? The practice wallet is a throwaway key made in this tab, just to feel how signing works. Nothing is sent, nothing is saved.
            </p>
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
      <li className={result === "verified" || result === "practice" ? "done" : ""}>
        <h3>Sign it</h3>
        <p>
          {practicing
            ? "A real wallet would show you the pledge and ask you to approve it. Here the practice wallet signs it straight away. It's a message, not a transaction: there's no gas and no contract."
            : "Your wallet shows the pledge and asks you to sign. It’s a message, not a transaction: there’s no gas and no contract."}
        </p>
        <div className="actions" style={{ marginBottom: "0.4rem" }}>
          <button type="button" className="btn primary" onClick={sign} disabled={!ready || signing || practiceSigning}>
            <i className="ph ph-signature" aria-hidden="true"></i>{" "}
            {signing ? "Waiting for your wallet…" : practicing ? "Sign the pledge (practice)" : "Sign the pledge"}
          </button>
          {result && (
            <button type="button" className="btn" onClick={() => setResult("")}>
              <i className="ph ph-arrow-counter-clockwise" aria-hidden="true"></i> Start over
            </button>
          )}
        </div>
        <p className={`status ${result === "verified" || result === "practice" ? "ok" : "warn"}`} role="status" aria-live="polite">
          {result === "verified" && "Signed, and checked: the signature matches your connected wallet. It stayed in this tab: nothing was sent, and nothing was recorded. Thank you."}
          {result === "practice" &&
            "✓ Signed. This is exactly what a real wallet does: it signs these words, and the signature is checked against the wallet that made it, here in this tab. It was only practice: nothing was sent, nothing was recorded, and the practice key is gone when you leave."}
          {result === "mismatch" && "Your wallet returned a signature that didn't match. Nothing was recorded."}
          {result === "declined" && "You chose not to sign. Nothing happened, and nothing was recorded."}
          {result === "failed" && "The wallet couldn't sign just now. Nothing was recorded, and you can try again."}
        </p>
      </li>
    </ol>
  );
}

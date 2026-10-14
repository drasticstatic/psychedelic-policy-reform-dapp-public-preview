// The two steady notes: "not legal advice" (wherever law or evidence is discussed) and "preview".
export function LegalNote() {
  return (
    <p className="note">
      <i className="ph ph-scales" aria-hidden="true"></i>
      <span>
        <strong>Not legal advice.</strong> This is general information about the law and public sources, written for understanding. It can&rsquo;t account for anyone&rsquo;s situation. For advice, talk to a lawyer licensed where you live.
      </span>
    </p>
  );
}

export function PreviewNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="note leaf">
      <i className="ph ph-flask" aria-hidden="true"></i>
      <span>{children}</span>
    </p>
  );
}

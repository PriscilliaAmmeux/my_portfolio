interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      className="text-blue-700 cursor-pointer hover:underline"
      target="_blank"
      rel="noopener noreferrer">
      {children}
    </a>
  );
}

type FolderIconProps = {
  selected?: boolean;
  className?: string;
};

export function FolderIcon({ selected = false, className = "" }: FolderIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M6 14a2 2 0 012-2h10l3 3h19a2 2 0 012 2v22a2 2 0 01-2 2H8a2 2 0 01-2-2V14z"
        stroke={selected ? "var(--color-accent)" : "var(--color-text-muted)"}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M6 17h36"
        stroke={selected ? "var(--color-accent)" : "var(--color-text-muted)"}
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

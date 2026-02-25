interface Props {
  className?: string;
}

export default function LocationOn({ className = "h-5 w-5" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 22s7-4.438 7-11a7 7 0 10-14 0c0 6.562 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 13.2a2.2 2.2 0 100-4.4 2.2 2.2 0 000 4.4z"
        fill="currentColor"
      />
    </svg>
  );
}


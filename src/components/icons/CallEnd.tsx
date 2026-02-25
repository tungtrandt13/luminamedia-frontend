interface Props {
  className?: string;
}

export default function CallEnd({ className = "h-5 w-5" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5.2 10.5c.6-1 1.6-1.6 2.7-1.6h1.6c.7 0 1.3.5 1.5 1.2l.6 2c.2.6 0 1.3-.5 1.7l-.9.8c1.1 2 2.7 3.6 4.7 4.7l.8-.9c.4-.5 1.1-.7 1.7-.5l2 .6c.7.2 1.2.8 1.2 1.5v1.6c0 1.1-.6 2.1-1.6 2.7-.8.4-1.7.6-2.6.4-8.2-1.9-14.6-8.3-16.5-16.5-.2-.9 0-1.8.4-2.6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}


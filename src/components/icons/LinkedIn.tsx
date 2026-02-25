interface Props {
  className?: string;
}

export default function LinkedIn({ className = "h-6 w-6" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.5 9H3.7v12H6.5V9zM5.1 3.7a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zM20.3 14.1c0-3.2-1.7-5.1-4.5-5.1-1.3 0-2.3.7-2.9 1.5V9H10v12h2.9v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2 1.9 2 3.4V21h2.9v-6.9z" />
    </svg>
  );
}


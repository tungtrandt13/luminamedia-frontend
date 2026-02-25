interface Props {
  className?: string;
}

export default function YouTube({ className = "h-6 w-6" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.6 7.3a2.7 2.7 0 00-1.9-2C18 5 12 5 12 5s-6 0-7.7.3a2.7 2.7 0 00-1.9 2A28.8 28.8 0 002 12a28.8 28.8 0 00.4 4.7 2.7 2.7 0 001.9 2C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 001.9-2A28.8 28.8 0 0022 12a28.8 28.8 0 00-.4-4.7zM10.2 15.5V8.5L16 12l-5.8 3.5z" />
    </svg>
  );
}


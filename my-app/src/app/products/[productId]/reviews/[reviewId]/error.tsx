"use client";
// * Error boundaries must be client components
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message}
      <button onClick={reset}>Try again</button>
    </div>
  );
}

// * Automatically wrap a route segment and its nested children in React Error Boundary

// * Create erro UI tailored to specific segments using the file-system hierarchy to adjust granularity

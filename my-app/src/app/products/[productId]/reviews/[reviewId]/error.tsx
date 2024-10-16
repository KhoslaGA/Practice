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

// * Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity

// * error.tsx will handle error to closest parent error boundary

// * move error.tsx file up the hierarchy and it takes care of more routes including previousr route

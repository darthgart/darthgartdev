"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="mb-4">Oops... Something went wrong!</h2>
      <Button variant="default" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}

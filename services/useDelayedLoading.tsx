import { useEffect, useState } from "react";

export function useDelayedLoading(delay = 150): boolean {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);
  return visible;
}

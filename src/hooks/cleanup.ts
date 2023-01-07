import { useRef, useEffect } from 'react';

export function useCleanup() {
  const cleanup = useRef(false);

  useEffect(() => {
    cleanup.current = false;
    return () => {
      cleanup.current = true;
    };
  }, []);

  return cleanup.current;
}

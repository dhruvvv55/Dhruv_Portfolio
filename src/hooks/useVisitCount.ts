import { useEffect, useState } from "react";

/**
 * useVisitCount — global visit counter using abacus.jasoncameron.dev
 * (free, no-signup counter service popular on portfolio sites).
 *
 * On mount, calls the /hit endpoint which increments the counter and
 * returns the current value. If the API is down, the hook silently
 * returns null and the UI can hide/skip the counter.
 *
 * Session-storage dedup: only counts one hit per browser tab.
 */

const NAMESPACE = "dhruv-ashok-patel";
const KEY = "portfolio-visits";
const SESSION_FLAG = "visit_counted";

export const useVisitCount = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchCount = async () => {
      try {
        // Only increment once per browser session
        const alreadyCounted = sessionStorage.getItem(SESSION_FLAG);
        const endpoint = alreadyCounted
          ? `https://abacus.jasoncameron.dev/get/${NAMESPACE}/${KEY}`
          : `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`;

        const res = await fetch(endpoint, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (!cancelled && typeof data.value === "number") {
          setCount(data.value);
          if (!alreadyCounted) sessionStorage.setItem(SESSION_FLAG, "1");
        }
      } catch (err) {
        // Silent fallback — the UI will just hide the counter
        console.warn("Visit count fetch failed:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCount();

    return () => {
      cancelled = true;
    };
  }, []);

  return { count, loading };
};

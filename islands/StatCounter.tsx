// islands/StatCounter.tsx
import { useState, useEffect } from "preact/hooks";

interface Props {
  end: number;
  label: string;
  delay?: number;
}

export default function StatCounter({ end, label, delay = 0 }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const duration = 10000;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const t = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(t * end));
      if (t < 1) {
        requestAnimationFrame(step);
      }
    }

    const timeout = setTimeout(() => {
      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeout);
  }, [end, delay]);

  return (
    <div class="text-center">
      <div class="text-4xl font-bold text-primary-600">
        {count.toLocaleString()}
      </div>
      <div class="text-neutral-600">{label}</div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

export function useScrollLeft() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onScroll = (e: any) => {
      setScrollLeft(e.target.scrollLeft);
    };

    node.addEventListener("scroll", onScroll);
    return () => node?.removeEventListener("scroll", onScroll);
  }, []);

  return { ref, scrollLeft };
}

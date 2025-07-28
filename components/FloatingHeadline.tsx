/** @jsxImportSource preact */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function FloatingHeadline({ text }: { text: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);                     // reset
    const id = setTimeout(() => setShow(true), 30);
    return () => clearTimeout(id);
  }, [text]);

  return (
    <h3
      key={text}
      class={`text-lg font-semibold mb-4 transform transition-all duration-500 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
    >
      {text}
    </h3>
  );
}

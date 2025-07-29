/** Super‑light “card” wrapper */
import { h } from "preact";
import type { JSX } from "preact";

export function Card(
  { class: cls = "", ...props }: JSX.HTMLAttributes<HTMLDivElement>,
) {
  return (
    <div
      {...props}
      class={`rounded-2xl bg-white shadow ${cls}`}
    />
  );
}

export function CardContent(
  { class: cls = "", ...props }: JSX.HTMLAttributes<HTMLDivElement>,
) {
  return <div {...props} class={`p-6 ${cls}`} />;
}
export default Card;

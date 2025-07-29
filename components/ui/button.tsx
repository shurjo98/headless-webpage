/** Simple Tailwind button that works as <button> or <a> */
import { h } from "preact";
import type { JSX } from "preact";

type ButtonProps = JSX.HTMLAttributes<
  HTMLButtonElement | HTMLAnchorElement
> & {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  as?: "a" | "button";
};

const sizeMap = { sm: "px-3 py-2 text-sm", md: "px-4 py-2", lg: "px-5 py-3" };

export function Button({
  variant = "solid",
  size = "md",
  as = "button",
  class: cls = "",
  children,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg focus:outline-none transition";
  const style =
    variant === "outline"
      ? "border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
      : "bg-primary-600 text-white hover:bg-primary-700";
  const sizes = sizeMap[size];
  const Comp = as as any; // <button> or <a>
  return (
    <Comp {...rest} class={`${base} ${sizes} ${style} ${cls}`}>
      {children}
    </Comp>
  );
}

export default Button;

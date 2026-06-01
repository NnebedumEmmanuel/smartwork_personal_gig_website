import React from "react";
import { cn } from "../lib/utils";

const variants = {
  default: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
  outline: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
  ghost: "bg-transparent text-slate-200 hover:bg-white/5",
};

const sizes = {
  default: "h-11 px-5 py-2",
  lg: "h-12 px-7 py-3 text-base",
  sm: "h-9 px-4 py-2 text-sm",
};

export function Button({ className, variant = "default", size = "default", asChild = false, children, ...props }) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition disabled:pointer-events-none disabled:opacity-50",
    variants[variant] || variants.default,
    sizes[size] || sizes.default,
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

import { type ButtonHTMLAttributes, forwardRef } from "react";
import classes from "./button.module.css";
import cn from "classnames";

export type ButtonProps = {
  children?: React.ReactNode;
  color?: "primary" | "secondary";
  variant?: "filled" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  fullWidth?: boolean;
  fullWidthOnMobile?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      color = "primary",
      variant = "filled",
      size = "medium",
      fullWidth = false,
      fullWidthOnMobile = false,
      disabled,
      ...rest
    },
    ref
  ) => (
    <button
      {...rest}
      ref={ref}
      disabled={disabled}
      className={cn(
        className,
        classes.root,
        classes[color],
        classes[variant],
        classes[size],
        fullWidth && classes.fullWidth,
        fullWidthOnMobile && classes.fullWidthOnMobile,
        disabled && classes.disabled
      )}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

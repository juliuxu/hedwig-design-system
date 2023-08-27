import { type ComponentPropsWithRef, forwardRef } from "react";
import classes from "./button.module.css";
import cn from "classnames";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  color?: "primary" | "secondary";
  variant?: "solid" | "outline";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  fullWidthOnMobile?: boolean;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement>(
  (
    {
      className,
      children,
      color = "primary",
      variant = "solid",
      size = "medium",
      fullWidth = false,
      fullWidthOnMobile = false,
      disabled,
      ...rest
    }: ButtonProps,
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

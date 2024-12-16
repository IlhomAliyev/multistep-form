import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  shape?: "circle" | "square";
  variant?: "outline" | "filled";
}

export const IconButton = ({
  icon,
  shape = "circle",
  variant = "filled",
  className,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={clsx(
        styles.iconButton,
        styles[shape],
        styles[variant],
        className
      )}
    >
      {icon}
    </button>
  );
};

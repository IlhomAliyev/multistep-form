import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export const CustomButton = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      {children}
    </button>
  );
};

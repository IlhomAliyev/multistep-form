import { clsx } from "clsx";
import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export interface CustomInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

export const CustomInput = ({
  className,
  isError,
  ...props
}: CustomInputProps) => {
  return (
    <input
      {...props}
      className={clsx(styles.input, className, { [styles._error]: isError })}
    />
  );
};

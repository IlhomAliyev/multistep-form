import DoneIcon from "@/assets/icons/done-icon.svg?react";
import { clsx } from "clsx";
import { forwardRef, InputHTMLAttributes, Ref } from "react";
import styles from "./styles.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const CustomRadio = forwardRef(
  ({ label, id, value, ...props }: Props, ref: Ref<HTMLInputElement>) => {
    return (
      <label className={clsx(styles.wrapper, "t-main-text")}>
        <DoneIcon className={styles.icon} />

        {label}

        <input {...props} ref={ref} id={id} value={value} type="radio" />
      </label>
    );
  }
);

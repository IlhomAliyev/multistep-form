import SelectArrowIcon from "@/assets/icons/select-arrow.svg?react";
import { clsx } from "clsx";
import {
  forwardRef,
  OptionHTMLAttributes,
  Ref,
  SelectHTMLAttributes,
} from "react";
import styles from "./styles.module.scss";

export interface CustomSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: OptionHTMLAttributes<HTMLOptionElement>[] | undefined;
  isError?: boolean;
  variant?: "filled" | "outline";
}

export const CustomSelect = forwardRef(
  (
    {
      value,
      options,
      className,
      isError,
      variant = "filled",
      ...props
    }: CustomSelectProps,
    ref: Ref<HTMLSelectElement>
  ) => {
    return (
      <div
        className={clsx(styles.wrapper, className, styles[variant], {
          [styles._error]: isError,
          [styles._empty]: value === "",
        })}
      >
        <select {...props} value={value} ref={ref}>
          {options?.map(({ value, label, disabled }) => (
            <option key={`${label}_${value}`} disabled={disabled} value={value}>
              {label}
            </option>
          ))}
        </select>
        <SelectArrowIcon className={styles.icon} />
      </div>
    );
  }
);

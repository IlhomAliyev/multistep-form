import CalendarIcon from "@/assets/icons/calendar-icon.svg?react";
import { clsx } from "clsx";
import { InputHTMLAttributes, useRef } from "react";
import styles from "./styles.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const CalendarInput = ({ className, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.showPicker();
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <CalendarIcon className={styles.icon} />
      <input
        lang="ru"
        ref={inputRef}
        {...props}
        onClick={onClick}
        type="date"
      />
    </div>
  );
};

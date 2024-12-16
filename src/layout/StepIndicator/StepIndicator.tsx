import { clsx } from "clsx";
import styles from "./styles.module.scss";
import { useAppSteps } from "@/common/hooks";

interface Props {
  count?: number;
  className?: string;
}

export const StepIndicator = ({ count = 2, className }: Props) => {
  const { appStep } = useAppSteps();

  return (
    <div className={clsx(styles.wrapper, className)}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={clsx(styles.step, {
            [styles._active]: appStep >= index + 1,
          })}
        ></div>
      ))}
    </div>
  );
};

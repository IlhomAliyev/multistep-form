import QuestionIcon from "@/assets/icons/question-icon.svg?react";
import { clsx } from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import { CustomTooltip } from "../CustomTooltip";
import { Display } from "../Display";
import { ErrorText } from "../ErrorText";
import { Skeleton } from "../Skeleton";
import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {
  label: string;
  itemId?: string;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  tooltipDescription?: ReactNode;
}

export const FormItem = ({
  label,
  itemId,
  children,
  isError,
  isLoading,
  errorMessage,
  tooltipDescription,
}: Props) => {
  if (isLoading) return <Skeleton style={{ height: "42px" }} />;

  if (isError) return <ErrorText message="Произошла ошибка :(" />;

  return (
    <div className={styles.formItem}>
      <label className={clsx(styles.label, "t-large-text")} htmlFor={itemId}>
        {label}
        <Display condition={tooltipDescription}>
          <CustomTooltip description={tooltipDescription}>
            <QuestionIcon />
          </CustomTooltip>
        </Display>
      </label>
      {children}
      <Display condition={errorMessage}>
        <ErrorText message={errorMessage} />
      </Display>
    </div>
  );
};

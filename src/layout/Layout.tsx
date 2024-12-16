import AttentionIcon from "@/assets/icons/attention-icon.svg?react";
import LeftArrowIcon from "@/assets/icons/left-arrow-icon.svg?react";
import { IconButton } from "@/ui/IconButton";
import { clsx } from "clsx";
import { PropsWithChildren } from "react";
import { StepIndicator } from "./StepIndicator";
import styles from "./styles.module.scss";
import { useAppSteps } from "@/common/hooks";
import { AppSteps } from "@/app/types";

export const Layout = ({ children }: PropsWithChildren) => {
  const { appStep, onPrevStep } = useAppSteps();

  return (
    <div className={styles.container}>
      <h1 className="t-heading-1">Travel</h1>

      <div className={styles.content}>
        <div className={styles.header}>
          <StepIndicator className={styles.indicator} />
          <IconButton
            type="button"
            title="Назад"
            onClick={onPrevStep}
            disabled={
              appStep === AppSteps.POLICY || appStep === AppSteps.RESULT
            }
            icon={<LeftArrowIcon />}
          />
        </div>
        {children}
        <p className={clsx("t-small-text", styles.attention)}>
          <AttentionIcon />
          Не волнуйтесь! Вы можете покинуть сайт и продолжить с этого момента в
          любое время
        </p>
      </div>
    </div>
  );
};

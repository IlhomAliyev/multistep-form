import { PropsWithChildren, ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {
  description: ReactNode;
}

export const CustomTooltip = ({ description, children }: Props) => {
  return (
    <div data-description={description} className={styles.tooltip}>
      {children}
      <div className={styles.description}>{description}</div>
    </div>
  );
};

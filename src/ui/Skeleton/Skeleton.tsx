import { HTMLAttributes } from "react";
import styles from "./styles.module.scss";

export const Skeleton = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={styles.skeleton}></div>;
};

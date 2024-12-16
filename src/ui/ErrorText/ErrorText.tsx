import styles from "./styles.module.scss";

interface Props {
  message: string | undefined;
}

export const ErrorText = ({ message }: Props) => {
  return <p className={styles.error}>{message}</p>;
};

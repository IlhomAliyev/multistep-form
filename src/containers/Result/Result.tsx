import { Display } from "@/ui/Display";
import { Skeleton } from "@/ui/Skeleton";
import { clsx } from "clsx";
import { useGetClientsQuery } from "../../common/services/clientsApi";
import { InsuranceClient } from "./InsuranceClient";
import styles from "./styles.module.scss";
import { ErrorText } from "@/ui/ErrorText";

export const Result = () => {
  const { data: clients, isLoading, isError } = useGetClientsQuery();

  if (isError) {
    return <ErrorText message="Произошла ошибка :(" />;
  }

  return (
    <div className={styles.result}>
      <h2 className={clsx(styles.title, "t-heading-2")}>Клиенты</h2>

      <Display condition={isLoading}>
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </>
      </Display>

      <Display condition={!isLoading}>
        <>
          {clients?.map((client) => (
            <InsuranceClient key={client.id} {...client} />
          ))}
        </>
      </Display>
    </div>
  );
};

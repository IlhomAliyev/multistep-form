import { ClientResponse } from "@/common/types";
import styles from "./styles.module.scss";
import { CustomButton } from "@/ui/CustomButton";
import { useDeleteClientMutation } from "@/common/services/clientsApi";

export const InsuranceClient = ({
  id,
  phone,
  country,
  coverage,
  insurance_begin,
  insurance_end,
  activity,
  program,
}: ClientResponse) => {
  const [deleteClient, { isLoading }] = useDeleteClientMutation();

  const onDelete = () => {
    deleteClient(id);
  };

  return (
    <div className={styles.client}>
      <div className={styles.info}>
        <p>
          <b>ID клиента:</b> {id}
        </p>
        <p>
          <b>Телефон:</b> {phone}
        </p>
        <p>
          <b>ID страны:</b> {country}
        </p>
        <p>
          <b>Тип покрытия:</b> {coverage}
        </p>
        <p>
          <b>Начало страхования:</b> {insurance_begin}
        </p>
        <p>
          <b>Конец страхования:</b> {insurance_end}
        </p>
        <p>
          <b>ID цели:</b> {activity}
        </p>
        <p>
          <b>ID программы:</b> {program}
        </p>
      </div>
      <CustomButton
        className={styles.delete}
        disabled={isLoading}
        onClick={onDelete}
      >
        Удалить
      </CustomButton>
    </div>
  );
};

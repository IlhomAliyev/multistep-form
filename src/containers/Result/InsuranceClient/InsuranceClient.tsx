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
          <b>ID:</b> {id}
        </p>
        <p>
          <b>Phone:</b> {phone}
        </p>
        <p>
          <b>Country:</b> {country}
        </p>
        <p>
          <b>Coverage:</b> {coverage}
        </p>
        <p>
          <b>Insurance Begin:</b> {insurance_begin}
        </p>
        <p>
          <b>Insurance End:</b> {insurance_end}
        </p>
        <p>
          <b>Activity:</b> {activity}
        </p>
        <p>
          <b>Program:</b> {program}
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

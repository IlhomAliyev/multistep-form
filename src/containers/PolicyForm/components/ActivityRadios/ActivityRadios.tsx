import { useGetActivitiesQuery } from "@/common/services";
import { FormFields, FormLabels } from "@/common/types";
import { CustomRadio } from "@/ui/CustomRadio";
import { FormItem } from "@/ui/FormItem";
import { useController } from "react-hook-form";
import { getTooltipLink } from "../../utils/getTooltipLink";
import styles from "./styles.module.scss";

export const ActivityRadios = () => {
  const { field, fieldState } = useController({ name: FormFields.activity });
  const { data: activities, isLoading, isError } = useGetActivitiesQuery();

  return (
    <FormItem
      label={FormLabels.activity}
      errorMessage={fieldState.error?.message}
      isLoading={isLoading}
      isError={isError}
      tooltipDescription={getTooltipLink(FormFields.activity)}
    >
      <div className={styles.wrapper}>
        {activities?.map(({ id, name }) => (
          <CustomRadio
            key={id}
            name={field.name}
            value={id}
            label={name}
            id={id.toString()}
            checked={field.value === id}
            onChange={(e) => field.onChange(e.target.value)}
          />
        ))}
      </div>
    </FormItem>
  );
};

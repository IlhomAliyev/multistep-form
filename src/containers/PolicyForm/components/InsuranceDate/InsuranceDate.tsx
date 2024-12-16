import { CalendarInput } from "@/ui/CalendarInput";
import { CustomSelect } from "@/ui/CustomSelect";
import { FormItem } from "@/ui/FormItem";
import dayjs from "dayjs";
import { ChangeEvent, useEffect, useState } from "react";
import { useController } from "react-hook-form";
import { payloadDateFormat } from "../../constants";
import { useDateOptions } from "../../hooks";
import { getTooltipLink } from "../../utils/getTooltipLink";
import styles from "./styles.module.scss";
import { getLocalData } from "@/common/utils/storageHandler";
import { StorageKeys } from "@/app/types";
import { Client, FormFields, FormLabels, InsuranceDateType } from "@/common/types";

interface Props {
  dateType: InsuranceDateType;
}

export const InsuranceDate = ({ dateType }: Props) => {
  const { field, fieldState } = useController({ name: FormFields[dateType] });

  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  const { daysOptions, monthsOptions, yearsOptions } = useDateOptions(
    date,
    dateType
  );

  const onDateChange = (newDate: Partial<typeof date>) => {
    const updatedDate = { ...date, ...newDate };
    setDate(updatedDate);

    if (updatedDate.day && updatedDate.month && updatedDate.year) {
      const formattedDate = `${updatedDate.day}.${updatedDate.month}.${updatedDate.year}`;
      field.onChange(formattedDate);
    }
  };

  const onCalendarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    const splittedDate = date.split("-");

    setDate({
      day: splittedDate[2],
      month: splittedDate[1],
      year: splittedDate[0],
    });

    const formattedDate = dayjs(date).format(payloadDateFormat);

    field.onChange(formattedDate);
  };

  useEffect(() => {
    const savedData = getLocalData<Client>(StorageKeys.formData);
    const date = savedData?.[dateType];

    if (date) {
      const [day, month, year] = date.split(".");
      onDateChange({ day, month, year });
    }
  }, [])

  return (
    <FormItem
      label={FormLabels[dateType]}
      tooltipDescription={getTooltipLink(FormFields[dateType])}
      errorMessage={fieldState.error?.message}
    >
      <div className={styles.wrapper}>
        <CustomSelect
          value={date.day}
          onChange={(e) => onDateChange({ day: e.target.value })}
          options={daysOptions}
          className={styles.select}
          isError={Boolean(fieldState.error?.message)}
        />
        <CustomSelect
          value={date.month}
          onChange={(e) => onDateChange({ month: e.target.value })}
          options={monthsOptions}
          className={styles.select}
          isError={Boolean(fieldState.error?.message)}
        />
        <CustomSelect
          value={date.year}
          onChange={(e) => onDateChange({ year: e.target.value })}
          options={yearsOptions}
          className={styles.select}
          isError={Boolean(fieldState.error?.message)}
        />
        <CalendarInput
          value={date.year ? `${date.year}-${date.month}-${date.day}` : ""}
          onChange={onCalendarChange}
          className={styles.calendar}
          max={
            dateType === FormFields.insurance_begin
              ? dayjs().format("YYYY-MM-DD")
              : ""
          }
          min={
            dateType === FormFields.insurance_end
              ? dayjs().format("YYYY-MM-DD")
              : ""
          }
        />
      </div>
    </FormItem>
  );
};

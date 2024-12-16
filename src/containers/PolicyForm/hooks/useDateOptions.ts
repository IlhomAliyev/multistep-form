import dayjs from "dayjs";
import { useMemo } from "react";
import "dayjs/locale/ru";
import localeData from "dayjs/plugin/localeData";
import { toCapitalize } from "@/common/utils";
import { FormFields, InsuranceDateType } from "@/common/types";

interface DateValue {
  day: string;
  month: string;
  year: string;
}

dayjs.extend(localeData);

export const useDateOptions = (
  date: DateValue,
  dateType: InsuranceDateType
) => {
  const daysOptions = useMemo(() => {
    const defaultOption = [{ label: "День", value: "", disabled: true }];
    const days = dayjs(`${date.year}-${date.month}-01`).daysInMonth();

    const currentDay = dayjs().date();
    const isCurrentMonth =
      date.year === dayjs().year().toString() &&
      date.month === dayjs().format("MM");

    const daysArray = Array.from({ length: days }, (_, i) => ({
      label: (i + 1).toString(),
      value: (i + 1).toString().length === 1 ? `0${i + 1}` : (i + 1).toString(),
      disabled: isCurrentMonth && i + 1 > currentDay,
    }));

    return [...defaultOption, ...daysArray];
  }, [date.month, date.year]);

  const monthsOptions = useMemo(() => {
    const defaultOption = [{ label: "Месяц", value: "", disabled: true }];

    const months = Array.from({ length: 12 }, (_, i) => {
      const month = dayjs().locale("ru").month(i);
      const isDisabled =
        dateType === FormFields.insurance_begin &&
        date.year === dayjs().year().toString() &&
        i > dayjs().month();

      return {
        label: toCapitalize(month.format("MMMM")),
        value: month.format("MM"),
        disabled: isDisabled,
      };
    });

    return [...defaultOption, ...months];
  }, [date.year, dateType]);

  const yearsOptions = useMemo(() => {
    const defaultOption = [{ label: "Год", value: "", disabled: true }];
    const range = 50;
    const currentYear = dayjs().year();

    const yearsArray = Array.from({ length: range }, (_, i) => ({
      label:
        dateType === FormFields.insurance_begin
          ? (currentYear - i).toString()
          : (currentYear + i).toString(),
      value:
        dateType === FormFields.insurance_begin
          ? (currentYear - i).toString()
          : (currentYear + i).toString(),
    }));

    return [...defaultOption, ...yearsArray];
  }, [dateType]);

  return {
    daysOptions,
    monthsOptions,
    yearsOptions,
  };
};

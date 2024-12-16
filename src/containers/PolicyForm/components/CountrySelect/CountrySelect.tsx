import PlusIcon from "@/assets/icons/plus-icon.svg?react";
import { useGetCountriesQuery } from "@/common/services";
import { FormFields, FormLabels } from "@/common/types";
import { toCapitalize } from "@/common/utils";
import { CustomSelect } from "@/ui/CustomSelect";
import { FormItem } from "@/ui/FormItem";
import { IconButton } from "@/ui/IconButton";
import { useMemo } from "react";
import { useController } from "react-hook-form";
import { getTooltipLink } from "../../utils/getTooltipLink";
import styles from "./styles.module.scss";

export const CountrySelect = () => {
  const { field, fieldState } = useController({ name: FormFields.country });
  const { data: countries, isLoading, isError } = useGetCountriesQuery();

  const countryOptions = useMemo(() => {
    const defaultValue = {
      label: "Выберите страну",
      disabled: true,
      value: "",
    };

    const other =
      countries?.map((country) => ({
        label: toCapitalize(country.name),
        value: country.id.toString(),
      })) || [];

    return [defaultValue, ...other];
  }, [countries]);

  return (
    <FormItem
      label={FormLabels.country}
      itemId={FormFields.country}
      isLoading={isLoading}
      isError={isError}
      tooltipDescription={getTooltipLink(FormFields.country)}
      errorMessage={fieldState.error?.message}
    >
      <div className={styles.countrySelect}>
        <CustomSelect
          id={FormFields.country}
          options={countryOptions!}
          className={styles.select}
          isError={Boolean(fieldState.error)}
          {...field}
        />

        <IconButton
          icon={<PlusIcon />}
          type="button"
          shape="square"
          title="Добавить страну"
          disabled
        />
      </div>
    </FormItem>
  );
};

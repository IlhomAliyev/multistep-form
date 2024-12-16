import { FormFields, FormLabels } from "@/common/types";
import { CustomRadio } from "@/ui/CustomRadio";
import { FormItem } from "@/ui/FormItem";
import { ChangeEvent } from "react";
import { useController } from "react-hook-form";
import { getTooltipLink } from "../../utils/getTooltipLink";

export const CoverageRadios = () => {
  const { field, fieldState } = useController({ name: FormFields.coverage });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.target.value);
  };

  return (
    <FormItem
      label={FormLabels.coverage}
      errorMessage={fieldState.error?.message}
      tooltipDescription={getTooltipLink(FormFields.coverage)}
    >
      <CustomRadio
        name={field.name}
        value="one-time"
        label="Однократное путешествие"
        id="one-time"
        checked={field.value === "one-time"}
        onChange={onChange}
      />
      <CustomRadio
        name={field.name}
        value="multiple"
        label="Многократное путешествие"
        id="multiple"
        checked={field.value === "multiple"}
        onChange={onChange}
      />
    </FormItem>
  );
};

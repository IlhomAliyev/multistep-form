import { Client, FormFields, FormLabels } from "@/common/types";
import { maskPhoneNumber } from "@/common/utils";
import { FormItem } from "@/ui/FormItem";
import { PhoneInput } from "@/ui/PhoneInput";
import { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import { getTooltipLink } from "../../utils/getTooltipLink";
import { getLocalData } from "@/common/utils/storageHandler";
import { StorageKeys } from "@/app/types";

export const PhoneNumber = () => {
  const { field, fieldState } = useController({ name: FormFields.phone });
  const [phone, setPhone] = useState({
    code: "+998",
    number: "",
  });

  const onPhoneChange = (newPhone: Partial<typeof phone>) => {
    const updatedPhone = {
      code: newPhone.code || phone.code,
      number: maskPhoneNumber(newPhone.number),
    };
    setPhone(updatedPhone);

    if (updatedPhone.code && updatedPhone.number) {
      const formattedPhone = `${updatedPhone.code}${updatedPhone.number.replace(
        /\D/g,
        ""
      )}`;
      field.onChange(formattedPhone);
    }
  };

  useEffect(() => {
    const savedData = getLocalData<Client>(StorageKeys.formData);
    const phone = savedData?.phone;

    if (phone && phone.length >= 11) {
      const code = phone.slice(-9, 0);
      const number = phone.slice(-9);
      onPhoneChange({ code, number });
    }
  }, []);

  return (
    <FormItem
      label={FormLabels.phone}
      errorMessage={fieldState.error?.message}
      tooltipDescription={getTooltipLink(FormFields.phone)}
    >
      <PhoneInput
        selectProps={{
          value: phone.code,
          onChange: (e) => onPhoneChange({ code: e.target.value }),
          isError: Boolean(fieldState.error?.message),
        }}
        inputProps={{
          value: phone.number,
          onChange: (e) => onPhoneChange({ number: e.target.value }),
          isError: Boolean(fieldState.error?.message),
        }}
      />
    </FormItem>
  );
};

import { countryParamsOptions } from "@/containers/PolicyForm/constants";
import { CustomInput, CustomInputProps } from "../CustomInput";
import { CustomSelect, CustomSelectProps } from "../CustomSelect";
import styles from "./styles.module.scss";

interface Props {
  selectProps: Omit<CustomSelectProps, "options">;
  inputProps: CustomInputProps;
}

export const PhoneInput = ({ selectProps, inputProps }: Props) => {
  const currentCountry = countryParamsOptions.find(
    (country) => country.value === selectProps.value
  );

  return (
    <div className={styles.wrapper}>
      <img src={currentCountry?.flag} alt="" />
      <CustomSelect
        {...selectProps}
        className={styles.codeSelect}
        options={countryParamsOptions}
        variant="outline"
      />
      <CustomInput {...inputProps} type="tel" placeholder="99 123-45-67" />
    </div>
  );
};

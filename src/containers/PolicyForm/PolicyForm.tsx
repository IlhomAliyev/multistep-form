import { useAppSteps } from "@/common/hooks";
import { FormFields } from "@/common/types";
import { CustomButton } from "@/ui/CustomButton";
import { clsx } from "clsx";
import { useFormContext } from "react-hook-form";
import { ActivityRadios } from "./components/ActivityRadios";
import { CountrySelect } from "./components/CountrySelect";
import { CoverageRadios } from "./components/CoverageRadios";
import { InsuranceDate } from "./components/InsuranceDate";
import { PhoneNumber } from "./components/PhoneNumber";
import styles from "./styles.module.scss";

export const PolicyForm = () => {
  const { onNextStep } = useAppSteps();
  const { formState, trigger } = useFormContext();

  const handleNextStep = async () => {
    const isStepValid = await trigger([
      FormFields.country,
      FormFields.coverage,
      FormFields.insurance_begin,
      FormFields.insurance_end,
      FormFields.activity,
      FormFields.phone,
    ]);

    if (isStepValid) {
      onNextStep();
    }
  };

  return (
    <div className={styles.policyForm}>
      <h2 className={clsx(styles.title, "t-heading-2")}>
        Покупка страхового полиса
      </h2>

      <CountrySelect />
      <CoverageRadios />
      <InsuranceDate dateType={FormFields.insurance_begin} />
      <InsuranceDate dateType={FormFields.insurance_end} />
      <ActivityRadios />
      <PhoneNumber />

      <CustomButton
        type="button"
        onClick={handleNextStep}
        disabled={
          !formState.isValid && Object.keys(formState.errors).length > 0
        }
      >
        Далее
      </CustomButton>
    </div>
  );
};

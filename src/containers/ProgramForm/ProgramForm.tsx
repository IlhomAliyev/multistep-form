import { FormFields } from "@/common/types";
import { priceFormat } from "@/common/utils/priceFormat";
import { CustomButton } from "@/ui/CustomButton";
import { Display } from "@/ui/Display";
import { Skeleton } from "@/ui/Skeleton";
import { clsx } from "clsx";
import { useFormContext } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import { ProgramRadio } from "./components/ProgramRadio";
import { usePrograms } from "./hooks";
import styles from "./styles.module.scss";
import { ErrorText } from "@/ui/ErrorText";

export const ProgramForm = () => {
  const { watch, formState } = useFormContext();
  const countryId = watch(FormFields.country);
  const programId = watch(FormFields.program);

  const { programs, isLoading } = usePrograms(countryId);
  const selectedProgram = programs?.find((program) => program.id === programId);

  return (
    <div className={styles.programForm}>
      <h2 className={clsx(styles.title, "t-heading-2")}>Выберите программу</h2>

      <Display condition={isLoading}>
        <Fragment>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} style={{ height: "100px" }} />
          ))}
        </Fragment>
      </Display>

      <Display condition={!isLoading}>
        <Fragment>
          {programs?.map((program) => (
            <ProgramRadio key={program.id} {...program} />
          ))}
        </Fragment>
      </Display>

      <Display
        condition={Boolean(formState.errors[FormFields.program]?.message)}
      >
        <ErrorText
          message={formState.errors[FormFields.program]?.message as string}
        />
      </Display>

      <h3 className={clsx(styles.subtitle, "t-heading-3")}>
        Сравнить программы
      </h3>

      <CustomButton
        type="submit"
        disabled={
          formState.isSubmitting ||
          Boolean(formState.errors[FormFields.program])
        }
        className={styles.button}
      >
        <span>Выбрать {selectedProgram?.name}</span>
        {selectedProgram && (
          <span>{priceFormat(selectedProgram?.liability)} EUR</span>
        )}
      </CustomButton>
    </div>
  );
};

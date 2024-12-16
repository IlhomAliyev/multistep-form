import { StorageKeys } from "@/app/types";
import DoneIcon from "@/assets/icons/done-icon.svg?react";
import { Client, FormFields, Program } from "@/common/types";
import { priceFormat } from "@/common/utils/priceFormat";
import { getLocalData } from "@/common/utils/storageHandler";
import { clsx } from "clsx";
import { ChangeEvent, useEffect } from "react";
import { useController } from "react-hook-form";
import { programParams } from "../../constants";
import styles from "./styles.module.scss";

export const ProgramRadio = ({ id, name, liability }: Program) => {
  const { field } = useController({ name: FormFields.program });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.target.value);
  };

  useEffect(() => {
    const savedData = getLocalData<Client>(StorageKeys.formData);
    const program = savedData?.program;

    if (program) {
      field.onChange(program);
    }
  }, []);

  return (
    <label
      className={clsx(styles.programRadio, {
        [styles._active]: id === field.value,
      })}
    >
      <DoneIcon className={styles.icon} />

      <div className={styles.info}>
        <p>{name}</p>
        <h5 className="t-heading-5">
          Общее покрытие - {priceFormat(liability!)} EUR
        </h5>
        <span>{programParams[id].description}</span>
      </div>

      <input
        type="radio"
        value={id}
        name={field.name}
        checked={field.value === id}
        onChange={onChange}
      />
    </label>
  );
};

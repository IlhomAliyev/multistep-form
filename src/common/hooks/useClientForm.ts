import { StorageKeys } from "@/app/types";
import { Client } from "@/common/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { policySchema } from "../../containers/PolicyForm/schemas";
import { useCreateClientMutation } from "../services/clientsApi";
import { getLocalData, removeLocalData } from "../utils/storageHandler";
import { useAppSteps } from "./useAppSteps";

const defaultValues: Partial<Client> = getLocalData(StorageKeys.formData) || {
  country: "",
  coverage: "",
  insurance_begin: "",
  insurance_end: "",
  activity: "",
  program: "",
  phone: "",
};

export const useClientForm = () => {
  const form = useForm({
    defaultValues,
    reValidateMode: "onChange",
    mode: "onChange",
    resolver: yupResolver(policySchema),
  });

  const { onNextStep } = useAppSteps();

  const [createClient, { isLoading: isClientsCreating }] =
    useCreateClientMutation();

  const onSubmit: SubmitHandler<Partial<Client>> = useCallback(
    async (data) => {
      const { error } = await createClient(data as Client);

      if (error) {
        console.error(error);
        return;
      }

      form.reset();
      onNextStep();
      removeLocalData(StorageKeys.formData);
    },
    [createClient, form, onNextStep]
  );

  return {
    form,
    onSubmit,
    isClientsCreating,
  };
};

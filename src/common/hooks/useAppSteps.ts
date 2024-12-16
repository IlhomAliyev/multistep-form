import { selectAppStep, setAppStep } from "@/app/slice";
import { AppSteps, StorageKeys } from "@/app/types";
import { useCallback } from "react";
import { setLocalData } from "../utils/storageHandler";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

export const useAppSteps = () => {
  const dispatch = useAppDispatch();
  const appStep = useAppSelector(selectAppStep);

  const onPrevStep = useCallback(() => {
    if (appStep > AppSteps.POLICY) {
      dispatch(setAppStep(appStep - 1));
      setLocalData(StorageKeys.appStep, appStep - 1);
    }
  }, [appStep, dispatch]);

  const onNextStep = useCallback(() => {
    if (appStep < AppSteps.RESULT) {
      dispatch(setAppStep(appStep + 1));
      setLocalData(StorageKeys.appStep, appStep + 1);
    }
  }, [appStep, dispatch]);

  const setStep = useCallback(
    (step: AppSteps) => {
      dispatch(setAppStep(step));
    },
    [dispatch]
  );

  return {
    appStep,
    onNextStep,
    onPrevStep,
    setStep,
  };
};

import { useEffect } from "react";
import { FormProvider } from "react-hook-form";
import { AppSteps, StorageKeys } from "./app/types";
import { useAppSteps, useClientForm } from "./common/hooks";
import { getLocalData, setLocalData } from "./common/utils/storageHandler";
import { PolicyForm } from "./containers/PolicyForm";
import { ProgramForm } from "./containers/ProgramForm";
import { Result } from "./containers/Result";
import { Layout } from "./layout";
import { Display } from "./ui/Display";

const App = () => {
  const { appStep, setStep } = useAppSteps();
  const { form, onSubmit } = useClientForm();
  const values = form.watch();

  useEffect(() => {
    const savedStep = getLocalData<AppSteps>(StorageKeys.appStep);

    if (savedStep && savedStep !== AppSteps.RESULT) {
      setStep(savedStep);
    }
  }, []);

  useEffect(() => {
    setLocalData(StorageKeys.formData, values);
  }, [values]);

  return (
    <Layout>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Display condition={appStep === AppSteps.POLICY}>
            <PolicyForm />
          </Display>

          <Display condition={appStep === AppSteps.PROGRAM}>
            <ProgramForm />
          </Display>

          <Display condition={appStep === AppSteps.RESULT}>
            <Result />
          </Display>
        </form>
      </FormProvider>
    </Layout>
  );
};

export default App;

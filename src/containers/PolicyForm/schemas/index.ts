import * as yup from "yup";
import { ObjectSchema } from "yup";
import { errorMessages, yupValidation } from "../constants";
import { Client, FormFields } from "../../../common/types";

export const policySchema: ObjectSchema<Partial<Client>> = yup.object({
  [FormFields.country]: yupValidation.text.required(errorMessages.required),
  [FormFields.coverage]: yupValidation.text.required(errorMessages.required),
  [FormFields.insurance_begin]: yupValidation.text.required(errorMessages.required),
  [FormFields.insurance_end]: yupValidation.text.required(errorMessages.required),
  [FormFields.activity]: yupValidation.text.required(errorMessages.required),
  [FormFields.program]: yupValidation.text.required(errorMessages.required),
  [FormFields.phone]: yupValidation.text.required(errorMessages.required),
});

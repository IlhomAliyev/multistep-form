import RUFlag from "@/assets/icons/flag-of-Russia-icon.svg";
import USAFlag from "@/assets/icons/flag-of-USA-icon.svg";
import UZFlag from "@/assets/icons/flag-of-Uzbekistan-icon.svg";
import { FormFields } from "@/common/types";
import dayjs from "dayjs";
import * as yup from "yup";

export const payloadDateFormat = "DD.MM.YYYY";

export const errorMessages = {
  required: "Поле обязательно для заполнения",
  maxLength: "Превышено максимальное количество символов",
  phone: "Некорректный номер телефона",
  invalid: "Некорректное значение",
  default: "Произошла ошибка. Попробуйте позже",
  date_begin: "Дата начала должна быть раньше даты окончания",
  date_end: "Дата окончания должна быть позже даты начала",
};

export const yupValidation = {
  number: yup.number().typeError(errorMessages.invalid),
  text: yup.string().trim().max(80, errorMessages.maxLength),
  communication: yup.boolean(),
  phone: yup.string().test("digits-count", errorMessages.invalid, (value) => {
    if (!value) return true;
    const digitsCount = value.replace(/\D/g, "").length;
    return digitsCount === 12;
  }),
  date: yup.string().test("valid-date", errorMessages.invalid, (value) => {
    if (!value) return false;
    const date = dayjs(value, payloadDateFormat);
    return date.isValid();
  }),
};

export const HelpLinks: Partial<Record<FormFields, string>> = {
  country: "https://letmegooglethat.com/?q=Что%20такое%20страна?",
  coverage: "https://letmegooglethat.com/?q=Что%20делать%20если%20я%20чайник?",
  insurance_begin: "https://letmegooglethat.com/?q=Лунный%20календарь",
  insurance_end: "https://letmegooglethat.com/?q=Лунный%20календарь",
  activity: "https://letmegooglethat.com/?q=Для%20чего%20люди%20путешествуют?",
  phone: "https://letmegooglethat.com/?q=Nokia%201202",
};

export const countryParamsOptions = [
  {
    id: "UZ",
    label: "(+998) UZ",
    value: "+998",
    flag: UZFlag,
  },
  {
    id: "RU",
    label: "(+7) RU",
    value: "+7",
    flag: RUFlag,
  },
  {
    id: "USA",
    label: "(+1) USA",
    value: "+1",
    flag: USAFlag,
  },
];

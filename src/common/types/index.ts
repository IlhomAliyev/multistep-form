export enum FormFields {
  country = "country",
  coverage = "coverage",
  insurance_begin = "insurance_begin",
  insurance_end = "insurance_end",
  activity = "activity",
  program = "program",
  phone = "phone",
}

export enum FormLabels {
  country = "Страна путешествия",
  coverage = "Тип покрытия",
  insurance_begin = "Начало страхования",
  insurance_end = "Конец страхования",
  activity = "Цель",
  program = "Выберите программу",
  phone = "Номер мобильного телефона",
}

export type InsuranceDateType =
  | FormFields.insurance_begin
  | FormFields.insurance_end;

export interface Client {
  country: string;
  coverage: string;
  insurance_begin: string;
  insurance_end: string;
  activity: string;
  program: string;
  phone: string;
}

export interface ClientResponse extends Client {
  id: string;
}

export interface Activity {
  id: number;
  name: string;
}

export interface Program {
  id: number;
  name: string;
  liability: number | null;
  coverages: Coverage | null;
}

export interface Coverage {
  medicine: number;
  accident: number;
  covid: number;
  evacuation: number;
  transportation: number;
  compensation: number;
}

export interface Country {
  id: number;
  name: string;
  isInSchengen: number;
  programs: Program[];
}

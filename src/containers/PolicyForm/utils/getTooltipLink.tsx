import { FormFields } from "@/common/types";
import { HelpLinks } from "../constants";

type LinksMap = Partial<
  Record<FormFields, { link: string | undefined; label: string }>
>;

const linksMap: LinksMap = {
  country: {
    link: HelpLinks.country,
    label: "Вам нужна помощь? Перейдите по ссылке",
  },
  coverage: {
    link: HelpLinks.coverage,
    label: "Да ладно, снова сами не справляетесь? :)",
  },
  insurance_begin: {
    link: HelpLinks.insurance_begin,
    label: "Ну... давайте попробуем уже сами...",
  },
  insurance_end: {
    link: HelpLinks.insurance_end,
    label: "Смотрим вверх )))",
  },
  activity: {
    link: HelpLinks.activity,
    label: "Для чего люди путешествуют?",
  },
  phone: {
    link: HelpLinks.phone,
    label: "У вас нет телефона?",
  },
};

export const getTooltipLink = (fieldName: FormFields) => {
  return (
    <a href={linksMap[fieldName]?.link} target="_blank" rel="noreferrer">
      {linksMap[fieldName]?.label}
    </a>
  );
};

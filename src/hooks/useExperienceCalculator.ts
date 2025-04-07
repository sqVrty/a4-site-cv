import { useMemo } from "react";
import { useTranslation } from "react-i18next";

type WorkExperienceItem = {
  dateStart: string;
  dateEnd: string;
};

export const useExperienceCalculator = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const monthToNumber = (monthStr: string): number => {
    const months: Record<string, Record<string, number>> = {
      ru: {
        январь: 1,
        января: 1,
        февраль: 2,
        февраля: 2,
        март: 3,
        марта: 3,
        апрель: 4,
        апреля: 4,
        май: 5,
        мая: 5,
        июнь: 6,
        июня: 6,
        июль: 7,
        июля: 7,
        август: 8,
        августа: 8,
        сентябрь: 9,
        сентября: 9,
        октябрь: 10,
        октября: 10,
        ноябрь: 11,
        ноября: 11,
        декабрь: 12,
        декабря: 12,
      },
      en: {
        january: 1,
        jan: 1,
        february: 2,
        feb: 2,
        march: 3,
        mar: 3,
        april: 4,
        apr: 4,
        may: 5,
        june: 6,
        jun: 6,
        july: 7,
        jul: 7,
        august: 8,
        aug: 8,
        september: 9,
        sep: 9,
        october: 10,
        oct: 10,
        november: 11,
        nov: 11,
        december: 12,
        dec: 12,
      },
    };

    return months[currentLanguage][monthStr.toLowerCase()] || 0;
  };

  const parseDate = (dateStr: string): { month: number; year: number } => {
    const [monthPart, yearPart] = dateStr.split(", ");
    const month = monthToNumber(monthPart.trim());
    const year = parseInt(yearPart.trim(), 10);
    return { month, year };
  };

  const calculateTotalMonths = (experiences: WorkExperienceItem[]): number => {
    return experiences.reduce((totalMonths, exp) => {
      const start = parseDate(exp.dateStart);
      const end = parseDate(exp.dateEnd);
      const months =
        (end.year - start.year) * 12 + (end.month - start.month) + 1;
      return totalMonths + months;
    }, 0);
  };

  const getRussianPlural = (
    number: number,
    titles: [string, string, string]
  ): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  const formattedExperience = useMemo(() => {
    const workExperiences = t("resume.workExperience", {
      returnObjects: true,
    }) as WorkExperienceItem[];

    const totalMonths = calculateTotalMonths(workExperiences);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (currentLanguage === "ru") {
      const yearsText =
        years > 0
          ? `${years} ${getRussianPlural(years, ["год", "года", "лет"])}`
          : "";
      const monthsText =
        months > 0
          ? `${months} ${getRussianPlural(months, [
              "месяц",
              "месяца",
              "месяцев",
            ])}`
          : "";
      return [yearsText, monthsText].filter(Boolean).join(" ");
    }

    const yearsText =
      years > 0 ? `${years} ${years === 1 ? "year" : "years"}` : "";
    const monthsText =
      months > 0 ? `${months} ${months === 1 ? "month" : "months"}` : "";
    return [yearsText, monthsText].filter(Boolean).join(" ");
  }, [t, currentLanguage]);

  return formattedExperience;
};

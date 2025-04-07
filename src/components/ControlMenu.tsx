import { useTranslation } from "react-i18next";
import Backend from "i18next-http-backend";

import classes from "./ControlMenu.module.scss";

export default function ControlMenu() {
  const { i18n } = useTranslation();
  const availableLanguages = ["ru", "en"];

  const handleLanguageClicked = () => {
    const currentLanguage = i18n.language;

    const currentIndex = availableLanguages.indexOf(currentLanguage);

    const nextIndex = (currentIndex + 1) % availableLanguages.length;
    const nextLanguage = availableLanguages[nextIndex];

    i18n.changeLanguage(nextLanguage);

    // setTimeout(() => {
    //   window.location.reload();
    // }, 500);
  };

  return (
    <div className={classes.container}>
      <div className={classes.contentWrapper}>
        <button onClick={() => handleLanguageClicked()}>Сменить язык</button>
        <button>Скачать PDF</button>
      </div>
    </div>
  );
}

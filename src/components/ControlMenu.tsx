import { RefObject } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useTranslation } from "react-i18next";

import classes from "./ControlMenu.module.scss";

export default function ControlMenu({
  resumeRef,
}: {
  resumeRef: RefObject<HTMLDivElement | null>;
}) {
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

  const handleExportPDF = () => {
    if (!resumeRef.current) {
      console.error("Resume ref is not available");
      return;
    }

    const input = resumeRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.contentWrapper}>
        <button onClick={() => handleLanguageClicked()}>Сменить язык</button>
        <button onClick={() => handleExportPDF()}>Скачать PDF</button>
      </div>
    </div>
  );
}

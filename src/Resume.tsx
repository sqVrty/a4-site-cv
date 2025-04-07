import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

import classes from "./Resume.module.scss";

type WorkExperienceItem = {
  post: string;
  companyName: string;
  dateStart: string;
  dateEnd: string;
  desc: string;
  stack: string;
};

type NonCommercialExperienceItem = {
  post: string;
  stack: string;
  dateStart: string;
  dateEnd: string;
};

const Resume = forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useTranslation();

  return (
    <div className={classes.resumeA4} ref={ref}>
      <div className={classes.contentWrapper}>
        <div className={classes.greetingBlock}>
          <h1>{t("resume.title")}</h1>
          <ul className={classes.infoAndContactsList}>
            <li>{t("resume.contacts.email")}</li>
            <li>{t("resume.contacts.phone")}</li>
            <li>{t("resume.contacts.telegram")}</li>
            <li>{t("resume.contacts.website")}</li>
            <li>{t("resume.contacts.location")}</li>
          </ul>
        </div>

        <img src="myPhoto.PNG" alt="my_photo" className={classes.myPhoto} />

        <div className={classes.aboutBlock}>
          <h1>{t("resume.about.title")}</h1>
          <p dangerouslySetInnerHTML={{ __html: t("resume.about.content") }} />
        </div>

        <div className={classes.skillsBlock}>
          <h1>{t("resume.skills.title")}</h1>
          <p>{t("resume.skills.content")}</p>
        </div>

        <div className={classes.workExperienceBlock}>
          <h1>{t("resume.experience.title")}</h1>
          <div className={classes.blocksWrapper}>
            {(
              t("resume.workExperience", {
                returnObjects: true,
              }) as Array<WorkExperienceItem>
            ).map((item, index) => (
              <div
                className={classes.workExperienceBlock}
                key={`${item.companyName}-${index}`}
              >
                <h2>
                  {item.post} в {item.companyName}
                </h2>
                <h3>
                  {item.dateStart} — {item.dateEnd}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                <p>
                  <span className={classes.stackHeaderText}>
                    {t("resume.experience.stack")}
                  </span>
                  : {item.stack}
                </p>
              </div>
            ))}
          </div>

          <div className={classes.notCommercialWorkExperienceBlock}>
            <h2>{t("resume.experience.professional")}</h2>
            <ul className={classes.notCommercialWorkExperienceList}>
              {(
                t("resume.nonCommercialExperience", {
                  returnObjects: true,
                }) as Array<NonCommercialExperienceItem>
              ).map((item, index) => (
                <li key={`${item.post}-${index}`}>
                  {item.post}. {t("resume.experience.stack")}: {item.stack}.{" "}
                  {item.dateStart} — {item.dateEnd}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={classes.educationBlock}>
          <h1>{t("resume.education.title")}</h1>
          <h3>{t("resume.education.period")}</h3>
          <p>{t("resume.education.content")}</p>
        </div>
      </div>
    </div>
  );
});

export default Resume;

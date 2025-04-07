import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

import classes from "./Resume.module.scss";

const Resume = forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useTranslation();

  const workExperienceData = [
    {
      post: "React/React Native Frontend Developer",
      companyName: "EmotionalEgghead",
      dateStart: "Август, 2023",
      dateEnd: "Апрель, 2024",
      desc: "Разработал с нуля SPA на Next.js (50+ страниц): SSR/SSG для SEO, динамические роуты, мультиязычность (i18n).<br/>Ключевые реализации: система ролей с авторизацией через JWT, видеоплатформа с кастомным плеером, интерактивные дашборды с графиками (Chart.js).<br/>Оптимизация производительности: сократил TTI на 35% через code splitting + lazy loading, уменьшил bundle size на 30% (анализ через Webpack Bundle Analyzer), настроил кэширование API-запросов (SWR).<br/>Процессы и сотрудничество: настроил CI/CD (GitHub Actions), тесная работа с CEO: предлагал решения для бизнес-логики (увеличили конверсию на 20%), получил предложение стать совладельцем продукта за значительный вклад.",
      stack:
        "Next.js, React, TypeScript, Redux Toolkit, Redux Thunk, MUI, CSS Modules",
    },
    {
      post: "React Frontend Developer",
      companyName: "МГТУ им. Баумана (Электронное Образование)",
      dateStart: "Ноябрь, 2022",
      dateEnd: "Май, 2023",
      desc: "Разрабатывал интерфейсы для системы управления общежитиями.<br/>Ключевые задачи: работа в команде из 3 фронтендеров (code review, git flow), рефакторинг legacy-кода, внедрение TypeScript, настройка разделения dev/prod окружений.",
      stack:
        "React, JavaScript/TypeScript, Redux, Prime React, SCSS, GitLab CI",
    },
  ];

  const notCommercialWorkExperienceData = [
    {
      post: "Фриланс",
      stack: "Vue 2/3, React, Redux, Effector, Zustand, Tailwind..",
      dateStart: "Июнь, 2022",
      dateEnd: "Июль, 2023",
    },
    {
      post: "Преподаватель JavaScript",
      stack: "JavaScript",
      dateStart: "Сентябрь, 2022",
      dateEnd: "Ноябрь, 2022",
    },
  ];

  return (
    <div className={classes.resumeA4} ref={ref}>
      <div className={classes.contentWrapper}>
        <div className={classes.greetingBlock}>
          <h1>Ташликович Сергей, React Frontend Developer</h1>
          <ul className={classes.infoAndContactsList}>
            <li>E-mail: sergeu-tash@yandex.ru</li>
            <li>Телефон: +7(989)049-17-01</li>
            <li>Telegram: @sqVrty</li>
            <li>Визитка: https://stash-cv.website</li>
            <li>Местоположение: Москва, Россия</li>
          </ul>
          <h1>{t("pypypy")}</h1>
        </div>

        <img src="myPhoto.PNG" alt="my_photo" className={classes.myPhoto} />

        <div className={classes.aboutBlock}>
          <h1>Обо мне</h1>
          <p>
            Имею опыт создания как простых лендингов, так и сложных
            высоконагруженных приложений (50+ страниц) с глубокой оптимизацией
            производительности. Работал фрилансером, что научило меня эффективно
            коммуницировать с заказчиками и работать в условиях сжатых сроков.
            Постоянно ищу и изучаю информацию о нативном <strong>JS</strong> или
            фреймворках, слежу за трендами через профильные паблики. Имею
            предпринимательский опыт — предлагал клиентам решения, повышающие их
            продажи. Свободно коммуницирую на английском. Буду рад работать в
            компании, где также любят технологии.
          </p>
        </div>

        <div className={classes.skillsBlock}>
          <h1>Навыки</h1>
          <p>
            JavaScript, TypeScript, React.js, Next.js, Redux, Redux Toolkit,
            HTML, CSS (flex, grid), Tailwind CSS, Git, REST API, Webpack, Vite,
            Jest, React Testing Library (RTL), ES Lint, Английский B2+
          </p>
        </div>

        <div className={classes.workExperienceBlock}>
          <h1>Опыт работы</h1>
          <div className={classes.blocksWrapper}>
            {workExperienceData.map((item, index) => (
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
                  <span className={classes.stackHeaderText}>Stack</span>:{" "}
                  {item.stack}
                </p>
              </div>
            ))}
          </div>

          <div className={classes.notCommercialWorkExperienceBlock}>
            <h2>Опыт до профессиональной разработки</h2>
            <ul className={classes.notCommercialWorkExperienceList}>
              {notCommercialWorkExperienceData.map((item, index) => (
                <li key={`${item.post}-${index}`}>
                  {item.post}. Stack: {item.stack}. {item.dateStart} —{" "}
                  {item.dateEnd}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={classes.educationBlock}>
          <h1>Образование</h1>
          <h3>2022 — 2026</h3>
          <p>
            Информатика и вычислительная техника 09.03.01, МГТУ им. Н.Э. Баумана
          </p>
        </div>
      </div>
    </div>
  );
});

export default Resume;

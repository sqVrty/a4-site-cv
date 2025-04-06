import classes from "./App.module.scss";

export default function App() {
  return (
    <div className={classes.resumeA4}>
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
        </div>

        <img src="myPhoto.PNG" alt="my_photo" className={classes.myPhoto} />

        <div className={classes.aboutBlock}>
          <h1>Обо мне</h1>
          <p>
            Frontend-разработчик с опытом создания как простых лендингов, так и
            сложных высоконагруженных приложений (50+ страниц) с глубокой
            оптимизацией производительности. Работал фрилансером, что научило
            меня эффективно коммуницировать с заказчиками и работать в условиях
            сжатых сроков. Постоянно изучаю новые технологии (
            <strong>React</strong>, <strong>Next.js</strong>), слежу за трендами
            через профильные паблики. Имею предпринимательский опыт — предлагал
            клиентам решения, повышающие их продажи. Свободно коммуницирую на
            английском.
          </p>
        </div>

        <div className={classes.aboutBlock}>
          <h1>Навыки</h1>
          <p>
            JavaScript, TypeScript, React.js, Next.js, Redux, HTML5, CSS3, Git,
            REST API, Webpack, Docker, Jest, i18n, Figma, Английский B2+
          </p>
        </div>

        <div className={classes.aboutBlock}>
          <h1>Опыт работы</h1>
          <p>
            JavaScript, TypeScript, React.js, Next.js, Redux, Redux Toolkit,
            HTML, CSS (flex, grid), Tailwind, Git, REST API, Webpack, Vite,
            Jest, React Testing Library, ES Lint, Английский B2+
          </p>
        </div>
      </div>
    </div>
  );
}

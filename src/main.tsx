import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import Resume from "./Resume";
import ControlMenu from "./components/ControlMenu";

import "./index.scss";
import "./_fonts.scss";

i18n.use(Backend).use(initReactI18next).init({
  lng: "ru",
  fallbackLng: "en",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Resume />
    <ControlMenu />
  </StrictMode>
);

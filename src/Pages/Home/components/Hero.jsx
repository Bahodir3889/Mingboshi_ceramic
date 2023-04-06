import React from "react";
import { useTranslation } from "react-i18next";
import Phone2 from '../../../assets/icon/phone2.svg'
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="hero__container container col-md-12">
        <h1 className="hero__title">
          {t("heroTitle.1")} <span className="hero__title--color">{t("heroTitle.2")}</span> {t("heroTitle.3")}{" "}
          <span className="hero__title--color">{t("heroTitle.4")}</span>
        </h1>
          <p className="hero__text">{t("heroTitle.text")}</p>
        <div className="tel__num">
          <img
            src={Phone2}
            alt="phone"
            className="phone__icon img-fluid"
          />
          <h2 className="mt-sm-0">+998 (90) 535-33-32</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;

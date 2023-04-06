import React from "react";
import { useTranslation } from "react-i18next";
import Asosiy from '../../../assets/home/Asosiy.png'
const ThisMuseum = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="thisMuseum__title" id="kontact">
        {t("footer.2")}
      </h1>
      <div className="thisMuseum__container">
        <img
          src={Asosiy}
          alt="main_image"
          className="thisMuseum__img h-auto col-xxl-9 col-xl-8 col-lg-7 col-md-6 col-sm-12 col-12"
        />
        <div className="thisMuseum__content col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12">
          <ul className="thisMuseum__info mt-md-3 mt-sm-2">
            <li className="thisMuseum__text1">{t("why.1")}</li>
            <li className="thisMuseum__text2">{t("why.2")}</li>
            <li className="tal">{t("ThisMuseum.1")}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ThisMuseum;

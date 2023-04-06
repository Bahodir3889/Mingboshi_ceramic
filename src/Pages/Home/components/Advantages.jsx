import React from "react";
import "../../../App.css"
  import { useTranslation } from 'react-i18next';
import Cofeicon from '../../../assets/icon/cofe.svg'
import Priceicon from '../../../assets/icon/price.svg'
import Helpicon from '../../../assets/icon/help.svg'
const Advantages = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="advantages__title">{t('footer.4')}</h1>1
      <div className="advantages">
        <div className="advantages__container h-auto container col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="advantages__box col-md-12 col-sm-12 col-12">
            <img src={Cofeicon} alt="" className="advantages__icon1"/>
            <h1 className="advantages__titles">{t("advantages.1.1")}</h1>
            <p className="advantages__text col-md-12 col-sm-12 col-12">
            {t("advantages.1.2")}
            </p>
          </div>
          <div className="advantages__box col-md-12 col-sm-12 col-12">
            <img src={Priceicon} alt="" className="advantages__icon2"/>
            <h1 className="advantages__titles">{t("advantages.2.1")}</h1>
            <p className="advantages__text col-md-12 col-sm-12 col-12">
            {t("advantages.2.2")}
            </p>
          </div>
          <div className="advantages__box col-md-12 col-sm-12 col-12">
            <img src={Helpicon} alt="" className="advantages__icon3"/>
            <h1 className="advantages__titles">{t("advantages.3.1")}</h1>
            <p className="advantages__text col-md-12 col-sm-12 col-12">
            {t("advantages.3.2")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advantages;

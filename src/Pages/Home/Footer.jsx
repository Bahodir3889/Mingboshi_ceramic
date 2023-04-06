import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Logo2 from '../../assets/home/Logo2.svg'
import Facebook_icon from '../../assets/icon/Facebook.svg'
import Telegram_icon from '../../assets/icon/Telegram.svg'
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="container col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="foo">
          <img src={Logo2} alt="logo" className="logo" />
          <div className="footer__navigation">
            <h2>
              {t("footer.1")}
            </h2>
            <h2>
              {t("footer.2")}
            </h2>
            <h2>
              {t("footer.3")}
            </h2>
            <h2>
              {t("footer.4")}
            </h2>
            <h2>
              {t("footer.5.1")}
            </h2>
            <h2>
              {t("footer.6.1")}
            </h2>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center mt-5">
          <p className="footer__text">
            {t("why.1")} {t("why.2")} 2023
          </p>
          <div className="d-flex justify-content-end align-items-center">
            <a href="https://www.facebook.com/profile.php?id=100088837771760">
            <img src={Facebook_icon} alt="" />
            </a>
            <a href="https://t.me/shahriyorwebdev">
              <img src={Telegram_icon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

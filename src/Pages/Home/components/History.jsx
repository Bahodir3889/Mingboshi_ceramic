import React from "react";
import { useTranslation } from "react-i18next";
import Historymaster from '../../../assets/home/history-master.jpg'
import Historycup from '../../../assets/home/history.jpg'
const History = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="history__title m-5">{t("footer.3")}</h1>
      <div className="history__container container  col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
        <img
          className="history__master"
          src={Historymaster}
          alt="history-master"
        />
        <div className="history_card">
          <p className="history__desc">
            {t("history.1")}
          </p>
          <img
            className="history__cup"
            src={Historycup}
            alt="history"
          />
        </div>
      </div>
    </>
  );
};

export default History;

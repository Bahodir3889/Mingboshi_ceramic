import React from "react";
import { useTranslation } from "react-i18next";
import Iframe from "react-iframe";
import Locationicon from '../../../assets/icon/location.svg'
import Phoneicon from '../../../assets/icon/phone.svg'
import Messageicon from '../../../assets/icon/message.svg'
const Contacts = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="contacts__title" id="contact">
        {t("footer.6.1")}
      </h1>
      <div className="con">
        <div className="contacts__box container col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="contacts__boxes col-xxl-4 col-xl-4 col-lg-5 col-md-5 col-sm-12 col-12 ">
            <div className="contacts__location">
              <img
                src={Locationicon}
                alt=""
                className="location__icon"
              />
              <p className="location__text">{t("footer.6.2")}</p>
            </div>
            <div className="contacts__help">
              <img src={Phoneicon} alt="" className="help__icon" />
              <h1 className="help__num">
                +998 (90) 535-33-32 +998 (98) 558-33-32
              </h1>
            </div>
            <p className="contacts_after">{t("footer.6.3")}</p>
            <div className="contacts__message">
              <img
                src={Messageicon}
                alt=""
                className="message__icon"
              />
              <p>mingboshiceramic@gmail.com</p>
            </div>
          </div>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3040.372188910167!2d71.290035!3d40.356271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bba925857f10c3%3A0xfac9ddcc4820c763!2sMINGBOSHI%20KERAMIK!5e0!3m2!1suz!2sus!4v1678677892483!5m2!1suz!2sus"
            className="location_google col-xxl-8 col-xl-8 col-lg-7 col-md-7 col-sm-12 col-12"
          ></Iframe>
        </div>
      </div>
    </>
  );
};

export default Contacts;

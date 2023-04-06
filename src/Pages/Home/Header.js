import React from "react";
import "./style.css";
import "../../App.css"
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Logo1 from '../../assets/home/Logo1.svg'

const Header = () => {
  // i18next.changeLanguage("ru")
    const { t } = useTranslation();
  const til = (qiymat)=>{
    i18next.changeLanguage(qiymat.target.value)
  }
  return (
    <>
      <header className="sitenav col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <nav className="container sitenav__container ms-auto me-auto">
          <Link className="nav-btn text-decoration-none text-black" to="/galareya">{t("footer.5.1")}</Link>
          <Link to="/" className="site-logo">
            <img src={Logo1} alt="logo" className="logo" />
          </Link>
          <select name="ru" id="translate" onChange={til}>
            <option value="ru">ru</option>
            <option value="uz">uz</option>
            <option value="en">en</option>
          </select>
        </nav>
      </header>
      
    </>
  );
};

export default Header;

import React from "react";
import ModalImage from "react-modal-image";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import second1 from "../../../assets/Home Galleries/galleries1.jpg";
import second2 from "../../../assets/Home Galleries/galleries2.JPG";
import second3 from "../../../assets/Home Galleries/galleries3.jpg";
import second4 from "../../../assets/Home Galleries/galleries4.jpg";
import second5 from "../../../assets/Home Galleries/galleries5.jpg";
import second6 from "../../../assets/Home Galleries/galleries6.jpg";
import second7 from "../../../assets/Home Galleries/galleries7.jpg";
import second8 from "../../../assets/Home Galleries/galleries8.jpg";
import second9 from "../../../assets/Home Galleries/galleries9.jpg";
import second10 from "../../../assets/Home Galleries/galleries10.jpg";
import second11 from "../../../assets/Home Galleries/galleries11.jpg";
import second12 from "../../../assets/Home Galleries/galleries12.jpg";

import seconds1 from "../../../assets/Home Galleries/Galleries/galleries1.jpg";
import seconds2 from "../../../assets/Home Galleries/Galleries/galleries2.jpg";
import seconds3 from "../../../assets/Home Galleries/Galleries/galleries3.jpg";
import seconds4 from "../../../assets/Home Galleries/Galleries/galleries4.jpg";
import seconds5 from "../../../assets/Home Galleries/Galleries/galleries5.jpg";
import seconds6 from "../../../assets/Home Galleries/Galleries/galleries6.jpg";
import seconds7 from "../../../assets/Home Galleries/Galleries/galleries7.jpg";
import seconds8 from "../../../assets/Home Galleries/Galleries/galleries8.jpg";
import seconds9 from "../../../assets/Home Galleries/Galleries/galleries9.jpg";
import seconds10 from "../../../assets/Home Galleries/Galleries/galleries10.jpg";
import seconds11 from "../../../assets/Home Galleries/Galleries/galleries11.jpg";
import seconds12 from "../../../assets/Home Galleries/Galleries/galleries12.jpg";

const images = [
  {
  img1:second1,
  img2:seconds1,
  },
  {
  img1:second2,
  img2:seconds2,
  },
  {
  img1:second3,
  img2:seconds3,
  },
  {
  img1:second4,
  img2:seconds4,
  },
  {
  img1:second5,
  img2:seconds5,
  },
  {
  img1:second6,
  img2:seconds6,
  },
  {
  img1:second7,
  img2:seconds7,
  },
  {
  img1:second8,
  img2:seconds8,
  },
  {
  img1:second9,
  img2:seconds9,
  },
  {
  img1:second10,
  img2:seconds10,
  },
  {
  img1:second11,
  img2:seconds11,
  },
  {
  img1:second12,
  img2:seconds12,
  },
];


const Galleries = () => {
      const { t } = useTranslation();
  return (
    <div>
      <h1 className="galleries__title">{t("footer.5.1")}</h1>
      <div className="galleries__box container">
        {images.map((element, index) => {
            return<ModalImage key={element} className="Image" small={element.img2} large={element.img1} />;

        })}
      </div>
      <Link to="/galareya" className="text-decoration-none">
      <button className="galleries__btn">{t("footer.5.2")}</button>
      </Link>
    </div>
  );
};

export default Galleries;

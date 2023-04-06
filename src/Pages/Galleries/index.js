import React from 'react'
import Footer from './../Home/Footer';
import Header from './../Home/Header';
import ModalImage from "react-modal-image";
import second1 from '../../assets/Galleries/galleries1.JPG'
import seconds1 from '../../assets/Galleries/galleries/galleries1.png'
import second2 from '../../assets/Galleries/galleries2.JPG'
import seconds2 from '../../assets/Galleries/galleries/galleries2.png'
import second3 from '../../assets/Galleries/galleries3.JPG'
import seconds3 from '../../assets/Galleries/galleries/galleries3.png'
import second4 from '../../assets/Galleries/galleries4.JPG'
import seconds4 from '../../assets/Galleries/galleries/galleries4.png'
import second5 from '../../assets/Galleries/galleries5.JPG'
import seconds5 from '../../assets/Galleries/galleries/galleries5.png'
import second6 from '../../assets/Galleries/galleries6.JPG'
import seconds6 from '../../assets/Galleries/galleries/galleries6.png'
import second7 from '../../assets/Galleries/galleries7.JPG'
import seconds7 from '../../assets/Galleries/galleries/galleries7.png'
import second8 from '../../assets/Galleries/galleries8.JPG'
import seconds8 from '../../assets/Galleries/galleries/galleries8.png'
import second9 from '../../assets/Galleries/galleries9.JPG'
import seconds9 from '../../assets/Galleries/galleries/galleries9.png'
import second10 from '../../assets/Galleries/galleries10.JPG'
import seconds10 from '../../assets/Galleries/galleries/galleries10.png'
import second11 from '../../assets/Galleries/galleries11.JPG'
import seconds11 from '../../assets/Galleries/galleries/galleries11.png'
import second12 from '../../assets/Galleries/galleries12.JPG'
import seconds12 from '../../assets/Galleries/galleries/galleries12.png'
import second13 from '../../assets/Galleries/galleries13.JPG'
import seconds13 from '../../assets/Galleries/galleries/galleries13.png'
import second14 from '../../assets/Galleries/galleries14.JPG'
import seconds14 from '../../assets/Galleries/galleries/galleries14.png'
import second15 from '../../assets/Galleries/galleries15.JPG'
import seconds15 from '../../assets/Galleries/galleries/galleries15.png'
import second16 from '../../assets/Galleries/galleries16.jpg'
import seconds16 from '../../assets/Galleries/galleries/galleries16.png'
import second17 from '../../assets/Galleries/galleries17.JPG'
import seconds17 from '../../assets/Galleries/galleries/galleries17.png'
import second18 from '../../assets/Galleries/galleries18.JPG'
import seconds18 from '../../assets/Galleries/galleries/galleries18.png'
import second19 from '../../assets/Galleries/galleries19.JPG'
import seconds19 from '../../assets/Galleries/galleries/galleries19.png'
import second20 from '../../assets/Galleries/galleries20.jpg'
import seconds20 from '../../assets/Galleries/galleries/galleries20.png'
import second21 from '../../assets/Galleries/galleries21.jpg'
import seconds21 from '../../assets/Galleries/galleries/galleries21.png'
import second22 from '../../assets/Galleries/galleries22.JPG'
import seconds22 from '../../assets/Galleries/galleries/galleries22.png'
import second23 from '../../assets/Galleries/galleries23.jpg'
import seconds23 from '../../assets/Galleries/galleries/galleries23.png'
import second24 from '../../assets/Galleries/galleries24.JPG'
import seconds24 from '../../assets/Galleries/galleries/galleries24.png'
import second25 from '../../assets/Galleries/galleries25.jpg'
import seconds25 from '../../assets/Galleries/galleries/galleries25.png'
import second26 from '../../assets/Galleries/galleries26.JPG'
import seconds26 from '../../assets/Galleries/galleries/galleries26.png'
import second27 from '../../assets/Galleries/galleries27.jpg'
import seconds27 from '../../assets/Galleries/galleries/galleries27.png'
import second28 from '../../assets/Galleries/galleries28.JPG'
import seconds28 from '../../assets/Galleries/galleries/galleries28.png'
import second29 from '../../assets/Galleries/galleries29.JPG'
import seconds29 from '../../assets/Galleries/galleries/galleries29.png'
import second30 from '../../assets/Galleries/galleries30.JPG'
import seconds30 from '../../assets/Galleries/galleries/galleries30.png'
import second31 from '../../assets/Galleries/galleries31.JPG'
import seconds31 from '../../assets/Galleries/galleries/galleries31.png'
import second32 from '../../assets/Galleries/galleries32.JPG'
import seconds32 from '../../assets/Galleries/galleries/galleries32.png'
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
  {
  img1:second13,
  img2:seconds13,
  },
  {
  img1:second14,
  img2:seconds14,
  },
  {
  img1:second15,
  img2:seconds15,
  },
  {
  img1:second16,
  img2:seconds16,
  },
  {
  img1:second17,
  img2:seconds17,
  },
  {
  img1:second18,
  img2:seconds18,
  },
  {
  img1:second19,
  img2:seconds19,
  },
  {
  img1:second20,
  img2:seconds20,
  },
  {
  img1:second21,
  img2:seconds21,
  },
  {
  img1:second22,
  img2:seconds22,
  },
  {
  img1:second23,
  img2:seconds23,
  },
  {
  img1:second24,
  img2:seconds24,
  },
  {
  img1:second25,
  img2:seconds25,
  },
  {
  img1:second26,
  img2:seconds26,
  },
  {
  img1:second27,
  img2:seconds27,
  },
  {
  img1:second28,
  img2:seconds28,
  },
  {
  img1:second29,
  img2:seconds29,
  },
  {
  img1:second30,
  img2:seconds30,
  },
  {
  img1:second31,
  img2:seconds31,
  },
  {
  img1:second32,
  img2:seconds32,
  },
];
const Galleries = () => {
  return (
    <>
      <div className='h-100'>
        <div>
          <Header />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="galleries__box container">
          {images.map((element, index) => {
            return <ModalImage key={element} className="Image" small={element.img2} large={element.img1} />;
          })}
        </div>
        <br />
        <br />
        <br />
        <br />

        <Footer />
      </div>
    </>
  )
}

export default Galleries
import React, { useEffect } from 'react'
import Carousel from 'react-gallery-carousel';
import Objective from './Objective.js'
import {Row, Col} from 'react-bootstrap'
import 'react-gallery-carousel/dist/index.css';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, paper_1, paper_2, tn_1, tn_2, tn_3, tn_4, tn_5, tn_6, tn_7, tn_8, tn_9, tn_10, tn_11, tn_12, tn_13, tn_paper_1, tn_paper_2, underline } from '../images/index.js';
import '../css/Home.css'

function Home() {

  const imgs = [
    {
      src: `${img1}`,
      thumbnail: `${tn_1}`,
    },
    {
      src: `${img2}`,
      thumbnail: `${tn_2}`,
    },
    {
      src: `${img3}`,
      thumbnail: `${tn_3}`,
    },
    {
      src: `${img4}`,
      thumbnail: `${tn_4}`,
    },
    {
      src: `${img5}`,
      thumbnail: `${tn_5}`,
    },
    {
      src: `${img6}`,
      thumbnail: `${tn_6}`,
    },
    {
      src: `${img7}`,
      thumbnail: `${tn_7}`,
    },
    {
      src: `${img8}`,
      thumbnail: `${tn_8}`,
    },
    {
      src: `${img9}`,
      thumbnail: `${tn_9}`,
    },
    {
      src: `${img10}`,
      thumbnail: `${tn_10}`,
    },
    {
      src: `${img11}`,
      thumbnail: `${tn_11}`,
    },
    {
      src: `${img12}`,
      thumbnail: `${tn_12}`,
    },
    {
      src: `${img13}`,
      thumbnail: `${tn_13}`,
    },
    {
      src: `${paper_1}`,
      thumbnail: `${tn_paper_1}`,
    },
    {
      src: `${paper_2}`,
      thumbnail: `${tn_paper_2}`,
    },
  ];

  const changeBg = () => {
    const images = [
      `url(${img1})`,
      `url(${img2})`,
      `url(${img3})`,
      `url(${img4})`,
      `url(${img5})`,
      `url(${img6})`,
      `url(${img7})`,
      `url(${img8})`,
      `url(${img9})`,
      `url(${img10})`,
      `url(${img11})`,
      `url(${img13})`,
    ];
    const home = document.querySelector('.home');
    const bg = images[Math.floor(Math.random() * images.length)];
    home.style.backgroundImage = bg;
  }

  useEffect(() => {
    setInterval(changeBg, 2000);
  });

  return (
    <div>
      <div id="home" className="home">
        <section>
          <h1>HIMA SHANKARAM CHARITABLE TRUST</h1>
        </section>
      </div>
      <div id="objectives" className="objectives">
        <h1>Our Main Objectives</h1>
        <img src={underline} alt=''/>
        <div className="objRow">
        <Row className="objRowSub">
          <Col xs={12} md={6} lg={4}>
            <Objective icon={<i class="fa fa-building icon" aria-hidden="true"/>} description="To support schools, orphanages and widow homes." />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Objective icon={<i class="fa fa-road icon" aria-hidden="true"/>} description="To support establishing and maintaining public amenities" />
          </Col>
          <Col xs={12} md={6} lg={4}>
          <Objective icon={<i class="fa fa-ambulance icon" aria-hidden="true"/>} description="To provide relief measures during natural calamities." />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Objective icon={<i class="fa fa-medkit icon" aria-hidden="true"/>} description="To provide food, medicine and clothing to the poor " />
          </Col>
          <Col xs={12} md={6} lg={4}>
          <Objective icon={<i class="fa fa-handshake-o icon" aria-hidden="true"/>} description="To support other charitable organizations" />
          </Col>
          <Col xs={12} md={6} lg={4}>
          <Objective icon={<i class="fa fa-money icon" aria-hidden="true"/>} description="To provide support to meritorius students in need" />
          </Col>
        </Row>
        </div>
      </div>
      <div id="gallery" className="carousel-container">
        <div className="gallery">
          <h1>Gallery</h1>
          <img src={underline} alt=''/>
        </div>
        <Carousel images={imgs} />
      </div>
    </ div>
  )
}

export default Home

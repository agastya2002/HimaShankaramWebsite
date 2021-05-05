import React, { useEffect } from 'react'
import Carousel from 'react-gallery-carousel';
import Objective from './Objective.js'
import {Row, Col} from 'react-bootstrap'
import 'react-gallery-carousel/dist/index.css';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, paper_1, paper_2, tn_1, tn_2, tn_3, tn_4, tn_5, tn_6, tn_7, tn_8, tn_9, tn_10, tn_11, tn_12, tn_13, tn_paper_1, tn_paper_2, underline, card1, card2, card3, card4} from '../images/index.js';
import FlipCard from './FlipCard.js'
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
      <div id="vision" >
        <div className="vision">
          <h1>Future Visions</h1>
          <img src={underline} alt=''/>
        </div>
        <div>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <FlipCard img={card1} title="Home for Destitute" descr="Our Future vision will be to establish, constitute and run a HOME for DESTITUTE men, women and/or children, who had been neglected by their kith and kin or orphans, having no means to lead decent lives. It is a harsh fact that elders/parents who are the foundation for the success and development of their children are facing severe hardships during twilight of their life time since the same children are abandoning them when they require due care and support. The Trust shall endeavour to render service to the needy, destitute personnel in such situations"/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <FlipCard img={card2} title="Health Care Programs" descr="Poor Communities living in remote areas with little or no access to primary medical care need basic medical services available in their location, avoiding necessity to travel for basic medical needs. Further, still, in some poor remote communities, there exists certain lack of awareness to prevent certain deceases & disorders. The Trust envisions to identify such needy remote, poor communities and organize medical camps and awareness programs to address certain issues both in curative & preventive ways "/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <FlipCard img={card3} title="Value based Education" descr="Spirit of Excellence in persuasion of primary, secondary and collegiate education is very essential in youth to be able to become employable upon completion of education. Further, value based education is essential to facilitate the youth to contribute to society upon completion of education. The Trust envisions to award scholarships to meritorious, extend assistance to bright needy students and organize character building programs for making the education to be value based  "/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <FlipCard img={card4} title="Skill Training" descr="The Trust envisions to facilitate imparting training and skills to the needy to equip themselves to be able to win their livelihood on their own"/>
            </Col>
          </Row>
        </div>
      </div>
    </ div>
  )
}

export default Home

import React from 'react';
import Objective from './Objective.js';
import '../css/Home.css';
import { underline } from '../images/index.js';

import objImg1 from '../images/gallery/11.png';
import objImg2 from '../images/gallery/disasterRelief.jpg';
import objImg3 from '../images/gallery/aid.jpg';
import objImg4 from '../images/gallery/studentSup.jpg';
import objImg5 from '../images/gallery/publicAmenities.jpg';

const objectivesData = [
  {
    title: "Support Institutions",
    description: "To support schools, orphanages and widow homes.",
    image: objImg1,
  },
  {
    title: "Disaster Relief",
    description: "To provide relief measures during natural calamities.",
    image: objImg2,
  },
  {
    title: "Aid for the Poor",
    description: "To provide food, medicine and clothing to the poor.",
    image: objImg3,
  },
  {
    title: "Student Support",
    description: "To provide support to meritorious students in need.",
    image: objImg4,
  },
  {
    title: "Public Amenities",
    description: "To support establishing and maintaining public amenities.",
    image: objImg5,
  },
];

function Objectives() {
  return (
    <div id="objectives" className="objectives">
      <div className="objRow">
        {objectivesData.map((obj, idx) => (
          <Objective
            key={idx}
            image={obj.image}
            title={obj.title}
            description={obj.description}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Objectives;
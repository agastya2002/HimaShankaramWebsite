import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import { underline } from '../images/index.js';

const visionItems = [
  {
    title: 'Home for Destitutes',
    summary:
      'A compassionate refuge for those facing abandonment, neglect, or extreme hardship.',
    detail:
      'We aspire to establish a safe and dignified home for destitute men, women, and children who have been left without support. This initiative reflects our commitment to restoring care, stability, and hope for people in their most vulnerable circumstances.',
  },
  {
    title: 'Healthcare Access',
    summary:
      'Bringing essential care and preventive awareness to underserved communities.',
    detail:
      'Our vision includes reaching rural and underserved communities with basic healthcare services and awareness programs. By organizing medical camps and supporting preventive care, we aim to reduce suffering and strengthen well-being at the grassroots level.',
  },
  {
    title: 'Value-Based Education',
    summary:
      'Nurturing both academic excellence and strong ethical character.',
    detail:
      'We believe education should develop both capability and character. Through scholarships, student support, and values-driven programs, we aim to prepare young people to contribute meaningfully to society with integrity, discipline, and purpose.',
  },
  {
    title: 'Skill Development',
    summary:
      'Creating lasting self-reliance through practical training and opportunity.',
    detail:
      'Empowering individuals with practical skills is central to building sustainable futures. We seek to support training and livelihood-focused opportunities that enable people to become self-reliant and support their families with dignity.',
  },
];

function Vision() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleItem = (index) => {
    if (!isMobile) return;
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="vision-section">
      <div className="section-heading vision-heading">
        <h1>Vision</h1>
        <img src={underline} alt="" />
      </div>
      <div className="vision-grid">
        {visionItems.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div className="vision-card-item" key={item.title}>
              <button
                className={`vision-panel ${isOpen ? 'open' : ''} ${!isMobile ? 'desktop-open' : ''}`}
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
              >
                <div className="vision-panel-header">
                  <h2>{item.title}</h2>
                  {isMobile && <span className="vision-toggle">{isOpen ? '−' : '+'}</span>}
                </div>
                {isMobile && <p className="vision-panel-summary">{item.summary}</p>}
                <p className={`vision-panel-full ${!isMobile ? 'desktop-visible' : ''}`}>{item.detail}</p>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Vision;
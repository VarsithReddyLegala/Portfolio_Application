import React, { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../Components/pageheader";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'; // Ensure correct stylesheet
import data from './utils.js';
import './style.scss';
import { MdWork, MdBusiness, MdLocationOn, MdExpandMore } from 'react-icons/md';

const Work = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleViewMoreClick = (index) => {
    setExpandedItem(expandedItem === index ? null : index); // Toggle the expanded item
  };

  return (
    <div>
      <section id="Work" className="Work">
        <PageHeaderContent headerText="Work Experience" icon={<MdWork size={40} />} />
        <div className="timeline">
          <div className="timeline__experience">
            <h3 className="timeline__experience__header-text">Experience</h3>
            <VerticalTimeline layout="2-columns" lineColor="black">
              {data.experience.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline__experience__vertical-timeline-element"
                  contentStyle={{
                    background: "#F8F8FF",
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
                    padding: "30px",
                    borderLeft: "6px solid blue",
                    color: 'black',
                    border: '1.5px solid blue',
                    height: 'auto',
                    borderRadius: '12px', 
                  }}
                   date={item.date}
                   dateStyle={{
                    fontSize: '2rem', // Adjust font size here
                    fontWeight: 'bold', // Optional for better emphasis
                    color: 'blue',
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    background: 'black',
                    color: 'white',
                  }}
                  position={i % 2 === 0 ? "left" : "right"}  // Alternate position
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <MdWork size={20} color="black" />
                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  </div>
                  <div className="vertical-timeline-element-org-wrapper">
                    <MdBusiness size={20} color="black" />
                    <h4 className="vertical-timeline-element-org">{item.Organization}</h4>
                  </div>
                  <div className="vertical-timeline-element-place-wrapper">
                    <MdLocationOn size={20} color="black" />
                    <h4 className="vertical-timeline-element-place">{item.place}</h4>
                  </div>
                  <h4 className="view-more-btn" onClick={() => handleViewMoreClick(i)}>
                    View More
                  </h4>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <div className="timeline__description">
            {expandedItem !== null && (
              <div className="timeline___description__container">
                <h4>Description</h4>
                <ul>
                  {data.experience[expandedItem].Description.map((desc, index) => (
                    <li key={index} className="timeline-description-item">{desc}</li>
                  ))}
                </ul>
                <h4>Technologies Used</h4>
                <ul className="timeline___description__tech">
                  {data.experience[expandedItem].tech_stack.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;

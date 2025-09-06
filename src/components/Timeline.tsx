import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          
          {/* ✅ SDE-1 Role */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Engineer - I</h3>
            <h4 className="vertical-timeline-element-subtitle">Amadeus Software Labs India Pvt Ltd, Bengaluru</h4>
            <p>
              Working as a backend Java developer, building and maintaining scalable systems for travel technology solutions. 
              Focused on performance optimization, microservices architecture, and delivering high-quality software in an agile environment.
            </p>
          </VerticalTimelineElement>

          {/* ✅ Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2025 - June 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer - Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Amadeus Software Labs India Pvt Ltd, Bengaluru</h4>
            <p>
              Developed scalable microservices using Java and Quarkus for real-time applications. 
              Designed and implemented RESTful APIs, wrote clean and efficient code following best practices, 
              and actively participated in agile development processes and code reviews.
            </p>
          </VerticalTimelineElement>

          {/* ✅ College */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.E: Computer Science And Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Chitkara University, Rajpura, Punjab</h4>
            <p>
              CGPA: 9.21
            </p>
          </VerticalTimelineElement>

          {/* ✅ Class 12th */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2021"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Class 12th</h3>
            <h4 className="vertical-timeline-element-subtitle">DC Montessori Senior Secondary School (CBSE)</h4>
            <p>
              Percentage - 87.2%
            </p>
          </VerticalTimelineElement>

          {/* ✅ Class 10th */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Class 10th</h3>
            <h4 className="vertical-timeline-element-subtitle">Little Flower Convent School (ICSE)</h4>
            <p>
              Percentage - 89.4%
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

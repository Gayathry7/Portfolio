import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import { FaGraduationCap,FaDiceD20 } from "react-icons/fa";


const TimeLineComponent=()=>{

    return(
        <>

    

<VerticalTimeline>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(92, 2, 2)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid rgb(92, 2, 2)' }}
    date="04/2021 - Present"
    iconStyle={{ background: '#f6c453', color: '#183a1d' }}
    icon={<MdWork/>}
  >
    <h3 className="vertical-timeline-element-title">Instructional Associate</h3>
    <h4 className="vertical-timeline-element-subtitle">Masai School - Bangalore, India</h4>
    {/* <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p> */}
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#fefbe9', color: '#183a1d' }}
    contentArrowStyle={{ borderRight: '7px solid #fefbe9' }}
    date="10/2020 - 05/2021"
    iconStyle={{ background: '#f7e99e', color: '#183a1d' }}
    icon={<FaGraduationCap/>}
  >
    <h3 className="vertical-timeline-element-title">Student</h3>
    <h4 className="vertical-timeline-element-subtitle">Masai School (Remote)</h4>
    <p>
     Joined a 30 week, Full Time, Full Stack Web Development bootcamp, to master MERN stack, DSA and Soft Skills.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fefbe9', color: '#183a1d' }}
    contentArrowStyle={{ borderRight: '7px solid #fefbe9' }}
    date="2019 - 2020"
    iconStyle={{ background: '#f6c453', color: '#183a1d' }}
    icon={<MdWork/>}
  >
    <h3 className="vertical-timeline-element-title">Teaching Associate</h3>
    <h4 className="vertical-timeline-element-subtitle">Ahmedabad University - Gujarat, India</h4>
    {/* <p>
      User Experience, Visual Design
    </p> */}
  </VerticalTimelineElement>


  
 
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2015 - 2019"
    iconStyle={{ background: '#f7e99e', color: '#183a1d'}}
    icon={<FaGraduationCap/>}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Technology - Chemical Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">Ahmedabad University</h4>
    <p>
       Secured 82%
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2015"
    iconStyle={{ background: '#f7e99e', color: '#183a1d'}}
    icon={<FaGraduationCap/>}
  >
    <h3 className="vertical-timeline-element-title">Completed HSC - Science</h3>
    <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya</h4>
    <p>
      Secured 85%
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2013"
    iconStyle={{ background: '#f7e99e', color: '#183a1d' }}
    icon={<FaGraduationCap/>}
  >
    <h3 className="vertical-timeline-element-title">Completed SSC</h3>
    <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya</h4>
    <p>
      10 CGPA
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: '#183a1d', color: '#fff' }}
    icon={<FaDiceD20/>}
  />
</VerticalTimeline>

</>
)

}


export {TimeLineComponent}
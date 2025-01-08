import React from "react"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import School from "@mui/icons-material/School";
import "../styles/Experience.css";

function Experience(){
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2019 - 2024"
                    iconStyle={{ backgroud: "#3e497a", colo: "#fff" }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title"> 
                        Simon Fraser University, Burnaby, BC
                    </h3>
                    <p> Bachelor's Degree</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience
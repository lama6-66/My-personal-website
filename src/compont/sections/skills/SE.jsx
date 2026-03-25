import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { useGSAP } from "@gsap/react";
import { MdAccountTree } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";


import gsap from "gsap";
import { TfiPencil } from "react-icons/tfi";import { FaProjectDiagram } from "react-icons/fa";


export default function CustomizedTimeline() {
  useGSAP(() => {
    gsap.from(".line > *", {
      y: 20,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".line",
        start: "top 80%",
      },
    });
  });

  return (
    <Timeline position="alternate" className="line mt-30">
      <h3 className="flex text-center items-center justify-center text-[30px] font-medium tracking-[2px] mb-10">
        Software Engineering Skills
      </h3>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="error">
            <TfiPencil />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="text-rose-500" variant="h6" component="span">
            Requirements Engineering
          </Typography>
          <Typography className="text-rose-300">
            Gathering needs and documenting SRS
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <FaProjectDiagram />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="text-blue-500" variant="h6" component="span">
            Analysis & Desing
          </Typography>
          <Typography className="text-blue-300">
            Creating Class,Sequence,and Use Case...Diagrams
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot  variant="outlined">
            <MdAccountTree />

          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography className="text-emerald-800" variant="h6" component="span">
            Architecture
          </Typography>
          <Typography className="text-emerald-400 text">
            Architecting scalable systems by transforming Non-Functional
            Requirements (NFRs) into robust UML-based designs
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <FaFileAlt />

          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography  className="text-fuchsia-700" variant="h6" component="span">
            SRS
          </Typography >
          <Typography className="text-fuchsia-700"
          >Documenting system requirements in a structured Software Requirements Specification (SRS) for clarity and consistency</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

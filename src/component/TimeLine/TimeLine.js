import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
const TimeLine = ({ timelines = [] }) => {
  return (
    <div>
      <Timeline position="right">
        {timelines.map((item, i) => (
          <Timeline position="alternate">
            {timelines.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {/* {item.date?.toString().split("T")[0]} */}
                  3/44/22
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                    <Event />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6">
                  {/* {item.title} */}
                  Title
                  </Typography>
                  <Typography>
                  {/* {item.description} */}
                  Desciption
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;

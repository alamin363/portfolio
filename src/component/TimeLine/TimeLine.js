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
import { FaCookie, FaDatabase, FaGalacticRepublic, FaPhone } from "react-icons/fa";
const TimeLine = ({ timelines = [] }) => {
  return (
    <div>
      <Timeline position="right">
        {/* {timelines.map((item, i) => ( */}
        <Timeline position="alternate">
          {/* {timelines.map((item, index) => ( */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {/* {item.date?.toString().split("T")[0]} */}
              13/12/21
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
                AgroHub <FaGalacticRepublic />
              </Typography>
              <Typography>
                My first Team project AgroHub. This project a B2B Web Site like Alibaba. on this web site the seller can deal with the seller's.for payment on this web site SSL payment method used to receive payment.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          {/* ))} */}
        </Timeline>
        {/* ))} */}
      </Timeline>
      <Timeline position="left">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {/* {item.date?.toString().split("T")[0]} */}
            05/05/22
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
            Phone Hunter <FaPhone />
            </Typography>
            <Typography>
            This Website sells all kinds of used phones like Samsung Vivo oppo apple etc. This Web site is controlled by the admin seller, user verified, deleted, etc. Different routes are created based on user seller and admin.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Timeline position="right">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {/* {item.date?.toString().split("T")[0]} */}
            12/04/22
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
            Cooking <FaCookie />
            </Typography>
            <Typography>
            A person cooks various dishes at home and sells them on web site.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      {/* <Timeline position="left">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            00/00/00
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
            Cooking <FaCookie />
            </Typography>
            <Typography>
            A person cooks various dishes at home and sells them on web site.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline> */}
    </div>
  );
};

export default TimeLine;

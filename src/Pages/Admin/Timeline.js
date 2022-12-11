import React, { useState, useEffect } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Timeline = () => {



  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

  };
  const deleteHandler = async (id) => {

  };

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch({ type: "CLEAR_ERRORS" });
  //   }
  //   if (message) {
  //     alert.success(message);
  //     dispatch({ type: "CLEAR_MESSAGE" });
  //   }

  //   if (loginMessage) {
  //     alert.success(loginMessage);
  //     dispatch({ type: "CLEAR_MESSAGE" });
  //   }
  // }, [alert, error, message, dispatch, loginMessage]);

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="adminPanelInputs"
          />

          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={""}>
            Add
          </Button>
        </form>

        <div className="adminPanelYoutubeVideos">
          {/* {user &&
            user.timeline &&
            user.timeline.map((item) => ( */}
              <div className="youtubeCard" key={"item._id"}>
                <Typography variant="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing 

                </Typography>
                <Typography variant="body1" style={{ letterSpacing: "2px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur molestiae voluptatum quidem veritatis nam voluptatem! Qui quas optio labore?
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 600 }}>
                  {/* {item.date.toString().split("T")[0]} */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, expedita.
                </Typography>

                <Button
                  style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40,0.7)",
                  }}
                  onClick={() => deleteHandler()}
                >
                  <FaTrash />
                </Button>
              </div>
            {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

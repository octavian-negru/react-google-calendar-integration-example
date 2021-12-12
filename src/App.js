import { css } from "@emotion/react";
import Calendar from "@ericz1803/react-google-calendar";
import React from "react";
import "./styles.css";

//put your google calendar api key here
const API_KEY = "";

//replace calendar id with one you want to test

let calendars = [
  { calendarId: "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com" }
];

let styles = {
  //you can use object styles
  calendar: {
    borderWidth: "3px" //make outer edge of calendar thicker
  },

  //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
};

export default function App() {
  return (
    <div className="App">
      <body>
        <div
          style={{
            width: "90%",
            paddingTop: "50px",
            paddingBottom: "50px",
            margin: "auto",
            maxWidth: "1200px"
          }}
        >
          <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
        </div>
      </body>
    </div>
  );
}

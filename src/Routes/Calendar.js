import React, {useEffect, useState} from "react";
import styles from "./Home.module.css";
import Sidebar from "../Components/Sidebar";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import {useNavigate} from "react-router-dom";

function Calendar() {
  const navigate = useNavigate();

  return (
      <div className="mh-100">
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={({dateStr}) => navigate(`/attendance/${dateStr}`)}
            expandRows={true}
        />
      </div>
  );
}

export default Calendar;
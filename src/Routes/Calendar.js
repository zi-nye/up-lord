import React, {useEffect, useState} from "react";
import FixedSidebar from "../Components/FixedSidebar";
import styles from "./Home.module.css";
import Sidebar from "../Components/Sidebar";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function Calendar() {

  return (
      <div id="App" className={styles.app}>
        <Sidebar outerContainerId={"App"} />
        <div>
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
        />
        </div>
      </div>
  );
}

export default Calendar;
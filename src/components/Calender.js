import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
export default function Calender({ todo }) {
  const [todos, setTodos] = todo;
  const [state, setState] = useState({
    weekendsVisible: true,
    currentEvents: [INITIAL_EVENTS],
  });
  const handleWeekendsToggle = () => {
    setState({
      ...state,
      weekendsVisible: !state.weekendsVisible,
    });
  };

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please add your event here");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    console.log("Creating an event ");
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });

      // update todos here
      const updatedTodos = [
        ...todos,
        { id: parseInt(createEventId()), text: title },
      ];
      setTodos(updatedTodos);
    }
    console.log(selectInfo);
  };

  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      console.log(clickInfo);
      clickInfo.event.remove();

      // remove the todo from todo list
      const updatedTodos = todos.filter(
        (todo) => todo.text !== clickInfo.event.title
      );
      setTodos(updatedTodos);
    }
  };

  const handleEvents = (events) => {
    setState({
      ...state,
      currentEvents: events,
    });
  };

  return (
    <div>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={state.weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />
      </div>
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

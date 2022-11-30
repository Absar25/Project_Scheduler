import TodoList from "./TodoList";

// function events(){

//     return (
//         <div  className="flex-parent-element">
//           <div className = 'flex-child-element magenta'><TodoList /></div>
//           {/* <div className = 'flex-child-element green'><Calender /></div> */}

//         </div>

//       );
// }
// export default events;

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
];
export function createEventId() {
  console.log("creating an event ID ");
  return String(eventGuid++);
}

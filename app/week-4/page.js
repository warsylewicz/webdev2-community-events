"use client";

import { useState } from "react";
import NewEvent from "./new-event";
import EventList from "./event-list";

export default function Page() {
  const [newEventOpen, setNewEventOpen] = useState(false);

  let eventModal = null;

  if (newEventOpen) {
    eventModal = (
      <div
        className="absolute h-full w-full bg-blue-gray-100 flex items-center justify-center bg-gray-950/90"
        onClick={() => setNewEventOpen(false)}
      >
        <NewEvent />
      </div>
    );
  }

  return (
    <main>
      <h1 className="text-4xl font-bold m-6 text-center text-yellow-300">
        Community Events
      </h1>

      {eventModal}

      <EventList />

      <div className="fixed right-16 bottom-16">
        <button
          className="bg-yellow-500 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-2 rounded-full w-20 h-20 flex items-center justify-center"
          onClick={() => setNewEventOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        </button>
      </div>
    </main>
  );
}

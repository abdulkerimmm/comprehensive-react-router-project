import React from "react";
import EventForm from "../components/EventForm";
import { redirect, json } from "react-router-dom";

const NewEventPage = () => {
  return (
    <div>
      <EventForm method="post" />
    </div>
  );
};

export default NewEventPage;

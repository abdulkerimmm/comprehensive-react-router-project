import React from "react";
import { useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import EventForm from "./../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-details");
  return (
    <div>
      <EventForm method="patch" event={data.event} />
    </div>
  );
};

export default EditEventPage;

import EventsPage, { loader as loaderAsyn } from "./pages/EventsPage";
import EventDetailPage, {
  loader as loaderAsynEvent,
  action as deleteEventAction,
} from "./pages/EventDetailPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import NewEventPage from "./pages/NewEventPage";
import Root from "./components/Root";
import EventRoot from "./pages/EventRoot";
import ErrorPage from "./pages/ErrorPage";
import EditEventPage from "./pages/EditEventPage";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: loaderAsyn,
          },
          {
            path: ":id1",

            id: "event-details",
            loader: loaderAsynEvent,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },

          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
function App() {
  return (
    <main>
      <h1>Hello from MAX Courses</h1>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;

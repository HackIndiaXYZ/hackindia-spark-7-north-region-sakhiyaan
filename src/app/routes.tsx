import { createBrowserRouter } from "react-router";
import { AppLayout } from "./layouts/AppLayout";
import { Home } from "./pages/Home";
import { Health } from "./pages/Health";
import { Business } from "./pages/Business";
import { Chat } from "./pages/Chat";
import { Education } from "./pages/Education";
import { MentalWellness } from "./pages/MentalWellness";
import { SocialEmpowerment } from "./pages/SocialEmpowerment";

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/health",
        Component: Health,
      },
      {
        path: "/business",
        Component: Business,
      },
      {
        path: "/chat",
        Component: Chat,
      },
      {
        path: "/education",
        Component: Education,
      },
      {
        path: "/mental-wellness",
        Component: MentalWellness,
      },
      {
        path: "/social-empowerment",
        Component: SocialEmpowerment,
      },
    ],
  },
]);

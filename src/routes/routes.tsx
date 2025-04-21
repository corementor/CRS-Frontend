import AppLayout from "@/layout/AppLayout/AppLayout";
import Attachment from "@/pages/businessreg/attachment/Attachment";
import BusinessRegistrationPage from "@/pages/businessreg/BusinessRegistrationPage";
import GeneralInfo from "@/pages/businessreg/generalinfo/GeneralInfo";
import ShareInfo from "@/pages/businessreg/shareinfo/ShareInfo";
import LoginPage from "@/pages/login/LoginPage";
import RegisterPage from "@/pages/register/RegisterPage";
import { Navigate } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "business-registration",
        element: <BusinessRegistrationPage />,
        children: [
          {
            index: true,
            element: <Navigate to="general-info" replace />,
          },
          {
            path: "general-info",
            element: <GeneralInfo />,
          },
          {
            path: "share-info",
            element: <ShareInfo />,
          },
          {
            path: "attachment",
            element: <Attachment />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AnimatePresence mode="wait">
        <LoginPage />
      </AnimatePresence>
    ),
  },
  {
    path: "/register",
    element: (
      <AnimatePresence mode="wait">
        <RegisterPage />
      </AnimatePresence>
    ),
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;

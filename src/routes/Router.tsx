import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthLayout from "../common/layouts/AuthLayout";
import DashboardLayout from "../common/layouts/DashboardLayout";
import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import { NotFound } from "../pages/NotFound";
import AuthCallbackPage from "../pages/auth/AuthCallbackPage";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import PostCargoPage from "../pages/dashboard/PostCargoPage";
import TrackingPage from "../pages/dashboard/TrackingPage";
import DocumentPage from "../pages/dashboard/DocumentPage";
import EvePage from "../pages/dashboard/EvePage";
import JobPage from "../pages/dashboard/JobPage";
import AuthRights from "./auth_role";
import CompanyPage from "../pages/dashboard/CompanyPage";
import NotificationPage from "../pages/dashboard/NotificationPage";
import JobDetailsPage from "../pages/dashboard/JobDetailsPage";
import OpportunitiesPage from "../pages/dashboard/OpportunitiesPage";
import SettingsPage from "../pages/dashboard/SettingsPage";
import ReportsPage from "../pages/dashboard/ReportsPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={
          <RequireAuth fallbackPath={"/login"}>
            <DashboardLayout />
          </RequireAuth>
        }
        // errorElement={<ServerError />}
      >
        <Route index path="/" element={<DashboardPage />} />
        <Route element={<AuthRights allowedRights={["sender"]} />}>
          <Route index path="/post_cargo" element={<PostCargoPage />} />
        </Route>
        <Route element={<AuthRights allowedRights={["owner"]} />}>
          <Route index path="/company" element={<CompanyPage />} />
          <Route index path="/jobs" element={<JobPage />} />
          <Route index path="/jobs/:id" element={<JobDetailsPage />} />
        </Route>
        <Route index path="/tracking" element={<TrackingPage />} />
        <Route index path="/opportunities" element={<OpportunitiesPage />} />
        <Route index path="/documents" element={<DocumentPage />} />
        <Route index path="/eve" element={<EvePage />} />
        <Route index path="/notifications" element={<NotificationPage />} />
        <Route index path="/settings" element={<SettingsPage />} />
        <Route index path="/reports" element={<ReportsPage />} />
      </Route>


      <Route element={ <RequireAuth fallbackPath={"/login"}>
        <AuthLayout />
      </RequireAuth>
      }>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/auth/callback" element={<AuthCallbackPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

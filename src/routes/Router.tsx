import RequireAuth from "@auth-kit/react-router/RequireAuth";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthLayout from "../common/layouts/AuthLayout";
import DashboardLayout from "../common/layouts/DashboardLayout";
import AuthCallbackPage from "../pages/auth/AuthCallbackPage";
import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import EvePage from "../pages/dashboard/EvePage";
import NotificationPage from "../pages/dashboard/NotificationPage";
import OpportunitiesPage from "../pages/dashboard/OpportunitiesPage";
import OpportunityDetailsPage from "../pages/dashboard/OpportunityDetailsPage";
import ReportsPage from "../pages/dashboard/ReportsPage";
import ResearchPage from "../pages/dashboard/ResearchPage";
import SettingsPage from "../pages/dashboard/SettingsPage";
import { NotFound } from "../pages/NotFound";
import ResearchDetailsPage from "../pages/dashboard/ResearchDetailsPage";
import ResearchProjectDetailsPage from "../pages/dashboard/ResearchProjectDetailsPage";
import MostActiveInstiutionsPage from "../pages/dashboard/MostActiveInstiutionsPage";
import KnowledgeHubPage from "../pages/dashboard/KnowledgeHubPage";
import AgreementsPage from "../pages/dashboard/AgreementsPage";
import AgreementDetailsPage from "../pages/dashboard/AgreementDetailsPage";

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
       
        <Route index path="/opportunities" element={<OpportunitiesPage />} />
        <Route index path="/opportunities/:id" element={<OpportunityDetailsPage />} />
        <Route index path="/research" element={<ResearchPage />} />
        <Route index path="/research/:id" element={<ResearchDetailsPage />} />
        <Route index path="/research/project/:id" element={<ResearchProjectDetailsPage />} />
        <Route index path="/research/instiutions" element={<MostActiveInstiutionsPage />} />
        <Route index path="/knowledge_hub" element={<KnowledgeHubPage />} />
        <Route index path="/agreements" element={<AgreementsPage />} />
        <Route index path="/agreements/:id" element={<AgreementDetailsPage />} />
        
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

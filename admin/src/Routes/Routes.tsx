import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import DashboardHome from "../pages/DashboardHome/DashboardHome";
import LogIn from "../pages/LoginPage/Login";
import MenuManagement from "../pages/MenuManagement/MenuManagement";
import { default as MySelection } from "../pages/MySelection/MySelection";
import TodaysMenu from "../pages/TodaysMenu/TodaysMenu";
import User from "../pages/User/User";
import PrivateRoute from "./PrivateRoute";

const LayoutRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />

        <Route
          path="/*"
          element={
            <DefaultLayout headerTitle="Dashboard">
              <Routes>
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <DashboardHome />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/menu-management"
                  element={
                    <PrivateRoute>
                      <MenuManagement />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/todays-menu"
                  element={
                    <PrivateRoute>
                      <TodaysMenu />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/admin-dashboard"
                  element={
                    <PrivateRoute>
                      <DashboardHome />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/my-selection"
                  element={
                    <PrivateRoute>
                      <MySelection />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/users"
                  element={
                    <PrivateRoute>
                      <User />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default LayoutRouter;

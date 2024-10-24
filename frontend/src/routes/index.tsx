import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Register from '../pages/Register'; // Add this line to import Register
import Dashboard from '../pages/Dashboard';
import EmployeeDirectory from '../pages/EmployeeDirectory';
import LeaveManagement from '../pages/LeaveManagement';
import Attendance from '../pages/Attendance';
import Payroll from '../pages/Payroll';
import Performance from '../pages/Performance';
import Tasks from '../pages/Tasks';
import Announcements from '../pages/Announcements';
import Learning from '../pages/Learning';
import Support from '../pages/Support';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <DashboardLayout>{children}</DashboardLayout>
  ) : (
    <Navigate to="/login" replace />
  );
};

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> {/* Ensure this route exists */}

      {/* Protected Routes */}
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/directory" element={<PrivateRoute><EmployeeDirectory /></PrivateRoute>} />
      <Route path="/leave" element={<PrivateRoute><LeaveManagement /></PrivateRoute>} />
      <Route path="/attendance" element={<PrivateRoute><Attendance /></PrivateRoute>} />
      <Route path="/payroll" element={<PrivateRoute><Payroll /></PrivateRoute>} />
      <Route path="/performance" element={<PrivateRoute><Performance /></PrivateRoute>} />
      <Route path="/tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
      <Route path="/announcements" element={<PrivateRoute><Announcements /></PrivateRoute>} />
      <Route path="/learning" element={<PrivateRoute><Learning /></PrivateRoute>} />
      <Route path="/support" element={<PrivateRoute><Support /></PrivateRoute>} />
      
      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;

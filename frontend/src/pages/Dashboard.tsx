import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import DashboardStats from '../components/dashboard/DashboardStats';
import AttendanceWidget from '../components/dashboard/AttendanceWidget';
import LeaveWidget from '../components/dashboard/LeaveWidget';
import TasksWidget from '../components/dashboard/TaskWidget';
import AnnouncementsWidget from '../components/dashboard/AnnouncementsWidget';
import PayrollWidget from '../components/dashboard/PayrollWidget';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-100 py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {user?.name}</h1>
        
        <DashboardStats />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AttendanceWidget />
          <PayrollWidget />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <LeaveWidget />
          <TasksWidget />
        </div>

        <div className="mt-8">
          <AnnouncementsWidget />
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
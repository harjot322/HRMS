import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users, FileText, Calendar, Clock, 
  DollarSign, Award, Briefcase, Bell,
  BookOpen, HelpCircle, Menu, X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const menuItems = [
  { icon: Users, label: 'Employee Directory', path: '/directory' },
  { icon: FileText, label: 'Leave Management', path: '/leave' },
  { icon: Clock, label: 'Attendance', path: '/attendance' },
  { icon: DollarSign, label: 'Payroll', path: '/payroll' },
  { icon: Award, label: 'Performance', path: '/performance' },
  { icon: Briefcase, label: 'Tasks', path: '/tasks' },
  { icon: Bell, label: 'Announcements', path: '/announcements' },
  { icon: Calendar, label: 'Events', path: '/events' }, // Added Calendar icon
  { icon: BookOpen, label: 'Learning', path: '/learning' },
  { icon: HelpCircle, label: 'Support', path: '/support' },
];

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        className="w-64 bg-white shadow-lg"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-indigo-600">HRMS</h1>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.path}
                whileHover={{ x: 5 }}
                onClick={() => navigate(item.path)}
                className="flex items-center w-full p-3 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-600"
              >
                <item.icon size={20} className="mr-3" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            >
              <Menu size={20} />
            </button>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium">{user?.name}</p>
                <p className="text-sm text-gray-500">{user?.role}</p>
              </div>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

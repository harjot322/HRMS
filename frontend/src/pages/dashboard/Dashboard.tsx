import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, Calendar, DollarSign, Award,
  Bell, CheckCircle, AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Clock, label: 'Time Today', value: '8h 30m', color: 'bg-blue-500' },
    { icon: Calendar, label: 'Leave Balance', value: '15 days', color: 'bg-green-500' },
    { icon: DollarSign, label: 'Last Payroll', value: '$3,450', color: 'bg-purple-500' },
    { icon: Award, label: 'Performance', value: '95%', color: 'bg-yellow-500' },
  ];

  const announcements = [
    { title: 'Company Picnic', date: '2024-03-25', type: 'info' },
    { title: 'Q1 Performance Review', date: '2024-03-30', type: 'important' },
    { title: 'New Health Benefits', date: '2024-04-01', type: 'announcement' },
  ];

  const tasks = [
    { title: 'Complete Training Module', deadline: '2024-03-20', status: 'pending' },
    { title: 'Submit Expense Report', deadline: '2024-03-22', status: 'completed' },
    { title: 'Team Meeting Notes', deadline: '2024-03-23', status: 'pending' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{stat.value}</h3>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Announcements */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Announcements</h2>
            <Bell className="text-gray-400" size={20} />
          </div>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.title} className="flex items-start space-x-4">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  announcement.type === 'important' ? 'bg-red-500' :
                  announcement.type === 'info' ? 'bg-blue-500' : 'bg-green-500'
                }`} />
                <div>
                  <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                  <p className="text-sm text-gray-500">{announcement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tasks */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Tasks</h2>
            <div className="flex space-x-2">
              <span className="text-sm text-gray-500">
                {tasks.filter(t => t.status === 'completed').length}/{tasks.length} completed
              </span>
            </div>
          </div>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.title} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {task.status === 'completed' ? (
                    <CheckCircle className="text-green-500" size={20} />
                  ) : (
                    <AlertCircle className="text-yellow-500" size={20} />
                  )}
                  <div>
                    <h3 className={`font-medium ${
                      task.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-900'
                    }`}>{task.title}</h3>
                    <p className="text-sm text-gray-500">Due: {task.deadline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
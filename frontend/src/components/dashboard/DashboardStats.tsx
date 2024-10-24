import React from 'react';
import { Clock, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      id: 1,
      name: 'Hours Today',
      value: '6h 30m',
      icon: Clock,
      change: '12%',
      changeType: 'increase',
    },
    {
      id: 2,
      name: 'Leave Balance',
      value: '12 days',
      icon: Calendar,
      change: '2 days',
      changeType: 'decrease',
    },
    {
      id: 3,
      name: 'Tasks Completed',
      value: '8/10',
      icon: CheckCircle,
      change: '90%',
      changeType: 'increase',
    },
    {
      id: 4,
      name: 'Pending Approvals',
      value: '3',
      icon: AlertCircle,
      change: '2',
      changeType: 'increase',
    },
  ];

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-indigo-500 rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {item.change}
              </p>
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
import React from 'react';
import { ClipboardList, ArrowRight } from 'lucide-react';

const TaskWidget = () => {
  const tasks = [
    {
      id: 1,
      title: 'Complete Performance Reviews',
      dueDate: '2024-03-20',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Update Employee Records',
      dueDate: '2024-03-22',
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Prepare Training Materials',
      dueDate: '2024-03-25',
      status: 'Completed',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">Tasks</h2>
        <ClipboardList className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="border-l-4 border-indigo-400 bg-indigo-50 p-4">
            <div className="flex justify-between">
              <h3 className="text-sm font-medium text-indigo-900">{task.title}</h3>
              <span className="text-sm text-indigo-600">{task.dueDate}</span>
            </div>
            <p className="mt-2 text-sm text-indigo-700">{task.status}</p>
          </div>
        ))}

        <div className="mt-4">
          <a
            href="#"
            className="flex items-center justify-between text-sm text-indigo-600 hover:text-indigo-900"
          >
            View All Tasks
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaskWidget;

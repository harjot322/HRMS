import React from 'react';
import { Bell } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const AnnouncementsWidget = () => {
  const announcements = [
    {
      id: 1,
      title: 'Company Meeting',
      content: 'All-hands meeting scheduled for next Friday at 3 PM.',
      date: '2024-03-15',
      priority: 'high',
    },
    {
      id: 2,
      title: 'New Policy Update',
      content: 'Updated work-from-home policy now available.',
      date: '2024-03-14',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Holiday Notice',
      content: 'Office will be closed for the upcoming holiday.',
      date: '2024-03-13',
      priority: 'low',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">Announcements</h2>
        <Bell className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="border-l-4 border-indigo-400 bg-indigo-50 p-4">
            <div className="flex justify-between">
              <h3 className="text-sm font-medium text-indigo-900">{announcement.title}</h3>
              <span className="text-sm text-indigo-600">{announcement.date}</span>
            </div>
            <p className="mt-2 text-sm text-indigo-700">{announcement.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <a
          href="#"
          className="flex items-center justify-between text-sm text-indigo-600 hover:text-indigo-900"
        >
          View All Announcements
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default AnnouncementsWidget;
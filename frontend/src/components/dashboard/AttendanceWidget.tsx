import React, { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const AttendanceWidget = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState<string | null>(null);

  const handleAttendance = () => {
    if (!isCheckedIn) {
      setCheckInTime(new Date().toLocaleTimeString());
      setIsCheckedIn(true);
    } else {
      setCheckInTime(null);
      setIsCheckedIn(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">Attendance</h2>
        <Clock className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Current Status</p>
            <p className="text-lg font-medium text-gray-900">
              {isCheckedIn ? 'Checked In' : 'Not Checked In'}
            </p>
          </div>
          {checkInTime && (
            <div>
              <p className="text-sm text-gray-500">Check-in Time</p>
              <p className="text-lg font-medium text-gray-900">{checkInTime}</p>
            </div>
          )}
        </div>

        <button
          onClick={handleAttendance}
          className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isCheckedIn
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isCheckedIn ? 'Check Out' : 'Check In'}
        </button>

        <div className="mt-4">
          <a
            href="#"
            className="flex items-center justify-between text-sm text-indigo-600 hover:text-indigo-900"
          >
            View Attendance History
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AttendanceWidget;
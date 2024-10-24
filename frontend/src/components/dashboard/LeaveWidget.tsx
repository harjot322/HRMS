import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

// Define the type for a leave request
interface LeaveRequest {
  id: number;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected'; // You can expand this as needed
}

const LeaveWidget: React.FC = () => {
  const [leaveDays, setLeaveDays] = useState<number>(10);
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);

  const handleLeaveRequest = () => {
    // Mock a leave request submission
    const newRequest: LeaveRequest = {
      id: leaveRequests.length + 1,
      date: new Date().toLocaleDateString(),
      status: 'Pending',
    };
    setLeaveRequests([...leaveRequests, newRequest]);
    setLeaveDays(leaveDays - 1);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">Leave Management</h2>
        <Calendar className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Available Leave Days</p>
            <p className="text-lg font-medium text-gray-900">{leaveDays}</p>
          </div>
        </div>

        <button
          onClick={handleLeaveRequest}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Request Leave
        </button>

        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-900">Leave Requests</h3>
          {leaveRequests.length > 0 ? (
            leaveRequests.map((request) => (
              <div key={request.id} className="flex justify-between bg-gray-100 p-2 rounded-md my-2">
                <span className="text-gray-700">Request #{request.id} - {request.date}</span>
                <span className={`text-xs ${request.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>
                  {request.status}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No leave requests yet.</p>
          )}
        </div>

        <div className="mt-4">
          <a
            href="#"
            className="flex items-center justify-between text-sm text-indigo-600 hover:text-indigo-900"
          >
            View Leave History
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeaveWidget;

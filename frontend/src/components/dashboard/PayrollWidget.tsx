import React from 'react';
import { DollarSign, ArrowRight } from 'lucide-react';

const PayrollWidget = () => {
  const payrollInfo = {
    currentMonth: 'March 2024',
    salary: '$5,000',
    paymentStatus: 'Processed',
    paymentDate: '2024-03-25',
    lastPayment: {
      amount: '$5,000',
      date: '2024-02-25',
      status: 'Paid',
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">Payroll</h2>
        <DollarSign className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Current Month</p>
            <p className="text-lg font-medium text-gray-900">{payrollInfo.currentMonth}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Base Salary</p>
            <p className="text-lg font-medium text-gray-900">{payrollInfo.salary}</p>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Next Payment</p>
              <p className="text-sm font-medium text-gray-900">{payrollInfo.paymentDate}</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {payrollInfo.paymentStatus}
            </span>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-sm font-medium text-gray-900">Last Payment</h3>
          <div className="mt-2 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">{payrollInfo.lastPayment.date}</p>
              <p className="text-lg font-medium text-gray-900">{payrollInfo.lastPayment.amount}</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {payrollInfo.lastPayment.status}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <a
            href="#"
            className="flex items-center justify-between text-sm text-indigo-600 hover:text-indigo-900"
          >
            View Payroll History
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PayrollWidget;
import React from 'react';
import { motion } from 'framer-motion';
import { DataTable } from '../components/ui/DataTable';
import { Search, UserPlus } from 'lucide-react';

interface Employee {
  id: number;
  name: string;
  department: string;
  role: string;
  email: string;
  status: 'Active' | 'Inactive';
}

const employees: Employee[] = [
  {
    id: 1,
    name: 'John Doe',
    department: 'Engineering',
    role: 'Senior Developer',
    email: 'john.doe@company.com',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    department: 'Marketing',
    role: 'Marketing Manager',
    email: 'jane.smith@company.com',
    status: 'Active',
  },
];

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'department',
    header: 'Department',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }: { row: { original: Employee } }) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          row.original.status === 'Active'
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
];

const EmployeeDirectory = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Employee Directory</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <UserPlus size={20} className="mr-2" />
          Add Employee
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search employees..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="bg-white rounded-lg shadow">
        <DataTable data={filteredEmployees} columns={columns} />
      </div>
    </motion.div>
  );
};

export default EmployeeDirectory;

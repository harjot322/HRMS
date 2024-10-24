import asyncHandler from 'express-async-handler';
import Payroll from '../models/payrollModel.js';
import User from '../models/userModel.js';
import Attendance from '../models/attendanceModel.js';

// @desc    Get user's payroll history
// @route   GET /api/payroll
// @access  Private
const getPayrollHistory = asyncHandler(async (req, res) => {
  const payrolls = await Payroll.find({ user: req.user._id })
    .sort({ year: -1, month: -1 });
  res.json(payrolls);
});

// @desc    Generate payroll for employees
// @route   POST /api/payroll
// @access  Private/Admin
const generatePayroll = asyncHandler(async (req, res) => {
  const { month, year } = req.body;

  const users = await User.find({ isActive: true });
  const payrolls = [];

  for (const user of users) {
    // Calculate attendance
    const attendance = await Attendance.find({
      user: user._id,
      date: {
        $gte: new Date(year, month - 1, 1),
        $lt: new Date(year, month, 1),
      },
    });

    const workDays = attendance.filter(a => a.status === 'present').length;
    const basicSalary = 5000; // Base salary - should be configured per employee
    const perDayRate = basicSalary / 22; // Assuming 22 working days
    const allowances = 500; // Should be configured per employee
    const deductions = (22 - workDays) * perDayRate;
    const netSalary = basicSalary + allowances - deductions;

    const payroll = await Payroll.create({
      user: user._id,
      month,
      year,
      basicSalary,
      allowances,
      deductions,
      netSalary,
      paymentMethod: 'bank_transfer',
      bankDetails: {
        accountNumber: '1234567890', // Should come from user profile
        bankName: 'Example Bank',
        branchCode: 'ABC123',
      },
    });

    payrolls.push(payroll);
  }

  res.status(201).json(payrolls);
});

// @desc    Process payroll
// @route   PUT /api/payroll/:id
// @access  Private/Admin
const processPayroll = asyncHandler(async (req, res) => {
  const payroll = await Payroll.findById(req.params.id);

  if (payroll) {
    payroll.status = 'paid';
    payroll.paymentDate = new Date();
    const updatedPayroll = await payroll.save();
    res.json(updatedPayroll);
  } else {
    res.status(404);
    throw new Error('Payroll not found');
  }
});

// @desc    Get payslip
// @route   GET /api/payroll/:id
// @access  Private
const getPayslip = asyncHandler(async (req, res) => {
  const payroll = await Payroll.findById(req.params.id).populate('user', 'name email department position');

  if (payroll) {
    if (payroll.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      res.status(401);
      throw new Error('Not authorized');
    }
    res.json(payroll);
  } else {
    res.status(404);
    throw new Error('Payslip not found');
  }
});

export {
  getPayrollHistory,
  generatePayroll,
  processPayroll,
  getPayslip,
};
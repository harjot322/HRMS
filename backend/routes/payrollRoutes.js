import express from 'express';
import {
  getPayrollHistory,
  generatePayroll,
  processPayroll,
  getPayslip,
} from '../controllers/payrollController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getPayrollHistory)
  .post(protect, admin, generatePayroll);

router.route('/:id')
  .get(protect, getPayslip)
  .put(protect, admin, processPayroll);

export default router;
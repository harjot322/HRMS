import axios from 'axios';

// Replace with your API base URL
const API_URL = '# YOUR_API_BASE_URL';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  logout: () => api.post('/auth/logout'),
};

export const employeeAPI = {
  getProfile: () => api.get('/employees/profile'),
  updateProfile: (data: any) => api.put('/employees/profile', data),
};

export const leaveAPI = {
  getLeaves: () => api.get('/leaves'),
  applyLeave: (data: any) => api.post('/leaves', data),
  cancelLeave: (id: string) => api.delete(`/leaves/${id}`),
};

export const attendanceAPI = {
  checkIn: () => api.post('/attendance/check-in'),
  checkOut: () => api.post('/attendance/check-out'),
  getAttendance: (month: string) => api.get(`/attendance/${month}`),
};

export const payrollAPI = {
  getSalary: (month: string) => api.get(`/payroll/${month}`),
  getPayslips: () => api.get('/payroll/payslips'),
};

export const performanceAPI = {
  getReviews: () => api.get('/performance/reviews'),
  submitReview: (data: any) => api.post('/performance/reviews', data),
};

export const taskAPI = {
  getTasks: () => api.get('/tasks'),
  createTask: (data: any) => api.post('/tasks', data),
  updateTask: (id: string, data: any) => api.put(`/tasks/${id}`, data),
  deleteTask: (id: string) => api.delete(`/tasks/${id}`),
};

export const announcementAPI = {
  getAnnouncements: () => api.get('/announcements'),
};

export const learningAPI = {
  getCourses: () => api.get('/learning/courses'),
  enrollCourse: (courseId: string) => api.post(`/learning/courses/${courseId}/enroll`),
};

export const supportAPI = {
  createTicket: (data: any) => api.post('/support/tickets', data),
  getTickets: () => api.get('/support/tickets'),
};

export default api;
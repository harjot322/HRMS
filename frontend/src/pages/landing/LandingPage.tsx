import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, Clock, Calendar, Award, 
  BookOpen, Bell, DollarSign, Briefcase 
} from 'lucide-react';
import Navbar from '../../components/landing/Navbar';
import { useAuth } from '../../contexts/AuthContext'; // Import the useAuth hook

const features = [
  {
    icon: Users,
    title: 'Employee Management',
    description: 'Comprehensive employee profiles and directory management'
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Accurate attendance tracking and leave management'
  },
  {
    icon: DollarSign,
    title: 'Payroll',
    description: 'Automated payroll processing and tax calculations'
  },
  {
    icon: Award,
    title: 'Performance',
    description: 'Performance reviews and goal tracking'
  },
  {
    icon: Briefcase,
    title: 'Task Management',
    description: 'Project and task assignment with progress tracking'
  },
  {
    icon: Bell,
    title: 'Announcements',
    description: 'Company-wide communication and updates'
  },
  {
    icon: BookOpen,
    title: 'Learning',
    description: 'Employee training and development programs'
  },
  {
    icon: Calendar,
    title: 'Leave Management',
    description: 'Streamlined leave requests and approvals'
  }
];

const LandingPage = () => {
  const { isAuthenticated } = useAuth(); // Get the authentication status

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-20 pb-12 md:pt-32 md:pb-24 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Modern HR Management
            <span className="text-indigo-600"> Simplified</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Streamline your HR operations with our comprehensive HRMS solution.
            Everything you need to manage your workforce effectively.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {!isAuthenticated ? ( // Show links conditionally based on authentication
              <>
                <Link 
                  to="/signup"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Get Started Free
                </Link>
                <Link 
                  to="/login"
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors border border-indigo-600"
                >
                  Login
                </Link>
              </>
            ) : (
              <Link 
                to="/dashboard"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Go to Dashboard
              </Link>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Everything you need to manage your workforce
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-gray-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 px-4 bg-indigo-600">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your HR management?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of companies that trust our HRMS platform
          </p>
          <Link 
            to="/signup"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;

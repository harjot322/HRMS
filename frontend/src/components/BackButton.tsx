import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-20 left-4 p-2 flex items-center text-gray-600 hover:text-gray-900 bg-white/80 backdrop-blur-sm rounded-md shadow-sm"
    >
      <ArrowLeft className="h-5 w-5 mr-1" />
      Back
    </button>
  );
};

export default BackButton;
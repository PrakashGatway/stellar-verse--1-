import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Backdrop Component
const Backdrop = ({ isOpen, onClick }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      onClick={onClick}
    />
  );
};


const ConsultationModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  let navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      mobileNumber: ''
    }
  });

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateIndianMobile = (number) => {
    const indianMobileRegex = /^[6-9]\d{9}$/;
    return indianMobileRegex.test(number.replace(/\D/g, ''));
  };

  const onSubmit = async (data) => {
    try {
      let response = await axios.post('https://uat.gatewayabroadeducations.com/api/v1/leads', { ...data, phone: data.mobileNumber, coursePreference: 'SAT', source: "googleAds" })
      if (response.data.success) {
        handleClose();
        navigate('/thankyou')
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    reset();
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen && !isVisible) return null;

  return (
    <>
      <Backdrop isOpen={isVisible} onClick={handleClose} />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
        <div
          className={`relative w-full max-w-md transform transition-all duration-300 ${isVisible
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-4 opacity-0 scale-95'
            }`}
        >
          {/* Modal Content */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl p-6 relative">

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-5 p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110 z-10"
              type="button"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Header */}
            <div className="pr-8 mb-6">
              <h3 className="text-xl font-bold text-red-700">Book Free Consultation</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Fill in your details and our expert will contact you shortly
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

              {/* Full Name Field */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-xs font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register('fullName', {
                    required: 'Full name is required',
                    minLength: {
                      value: 2,
                      message: 'Full name must be at least 2 characters'
                    },
                    maxLength: {
                      value: 50,
                      message: 'Full name must be less than 50 characters'
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]*$/,
                      message: 'Full name can only contain letters and spaces'
                    }
                  })}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Mobile Number Field */}
              <div className="space-y-2">
                <label htmlFor="mobileNumber" className="block text-xs font-medium text-gray-700">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  {...register('mobileNumber', {
                    required: 'Mobile number is required',
                    validate: {
                      validIndianNumber: (value) =>
                        validateIndianMobile(value) || 'Please enter a valid Indian mobile number'
                    },
                    minLength: {
                      value: 10,
                      message: 'Mobile number must be 10 digits'
                    },
                    maxLength: {
                      value: 10,
                      message: 'Mobile number must be 10 digits'
                    },
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: 'Mobile number must start with 6-9 and be 10 digits'
                    }
                  })}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your 10-digit mobile number"
                  maxLength={10}
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>
                )}
                <p className="text-xs text-gray-500">
                  Must be a valid Indian mobile number starting with 6-9
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-red-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>

            {/* Footer Note */}
            <p className="text-xs text-gray-500 text-center mt-4">
              Our counsellor will contact you within 24 hours
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationModal;
import axios from 'axios';
import { useState, useEffect } from 'react';

const CompactCallbackDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [showCountdown, setShowCountdown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen && !isSubmitted) {
        setIsOpen(true);
        setShowCountdown(true);
        setTimeLeft(20);
      }
    }, 20000);

    return () => clearInterval(interval);
  }, [isOpen, isSubmitted]);

  useEffect(() => {
    if (showCountdown && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowCountdown(false);
    }
  }, [showCountdown, timeLeft]);

  const validateMobile = (number) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!mobileNumber.trim()) {
      validationErrors.mobileNumber = 'Mobile number is required';
    } else if (!validateMobile(mobileNumber)) {
      validationErrors.mobileNumber = 'Please enter valid 10-digit number';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      let response = await axios.post('http://localhost:5000/api/v1/leads', { phone: mobileNumber, coursePreference: 'SAT', source: "googleAds" })
      if (response.data.success) {
        setErrors({});
        setIsSubmitted(true);
      }
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setMobileNumber('');
      }, 3000);
    } catch (error) {
      setErrors({ mobileNumber: error.message })
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowCountdown(false);
    setErrors({});
    setMobileNumber('');
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300"
        onClick={handleClose}
      />
      <div
        className={`fixed bottom-40 left-0 right-0 sm:right-6 sm:left-auto mx-auto w-80 max-w-screen-sm bg-white rounded-2xl shadow-4xl border z-50 transform transition-all duration-300 ${isOpen
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-10 opacity-0 scale-95'
          }`}
      >

        <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-t-2xl text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors duration-200 z-10"
            type="button"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Free SAT Consultation</h3>
              <p className="text-purple-100 text-xs">Get expert callback</p>
            </div>
          </div>

          {showCountdown && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full animate-pulse">
              {timeLeft}s
            </div>
          )}
        </div>

        <div className="p-4">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Your Mobile Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 text-sm">+91</span>
                  </div>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                    placeholder="9876543210"
                    className={`block w-full pl-10 pr-4 py-2 text-sm border rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${errors.mobileNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    maxLength={10}
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="mt-1 text-xs text-red-600">{errors.mobileNumber}</p>
                )}
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="text-green-500 text-xs">✓</span>
                    <span>Free Strategy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-green-500 text-xs">✓</span>
                    <span>Study Plan</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-green-500 text-xs">✓</span>
                    <span>Scholarship Help</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-green-500 text-xs">✓</span>
                    <span>30 Min Call</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1"
              >
                📞 Request Callback
              </button>

              <p className="text-xs text-gray-500 text-center">
                We call within 30 minutes
              </p>
            </form>
          ) : (
            /* Success Message */
            <div className="text-center py-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 text-sm mb-1">Thank You!</h4>
              <p className="text-gray-600 text-xs mb-2">
                We'll call you shortly on
              </p>
              <p className="font-semibold text-purple-600 text-sm">+91 {mobileNumber}</p>
              <div className="mt-3 p-2 bg-green-50 rounded border border-green-200">
                <p className="text-green-700 text-xs font-medium">
                  Keep your phone handy!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompactCallbackDrawer;
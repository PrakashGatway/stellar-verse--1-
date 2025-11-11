import { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, Check } from 'lucide-react';
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
  const [step, setStep] = useState(0);
  const [stepDirection, setStepDirection] = useState<'forward' | 'backward' | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    trigger
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      mobileNumber: '',
      satPurpose: '',
      educationLevel: '',
      examDate: '',
      classMode: '',
      city: ''
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

  // Auto-advance when all required fields in a step are filled
  useEffect(() => {
    if (stepDirection === 'forward') {
      const watchedStep = watch();

      if (step === 0 && watchedStep.satPurpose) {
        const timer = setTimeout(() => setStep(1), 100);
        return () => clearTimeout(timer);
      }
      if (step === 1 && watchedStep.educationLevel) {
        const timer = setTimeout(() => setStep(2), 100);
        return () => clearTimeout(timer);
      }
      if (step === 2 && watchedStep.examDate) {
        const timer = setTimeout(() => setStep(3), 100);
        return () => clearTimeout(timer);
      }
      if (step === 3 && watchedStep.classMode) {
        const timer = setTimeout(() => setStep(4), 100);
        return () => clearTimeout(timer);
      }
    }
  }, [watch(), step, stepDirection]);

  const validateIndianMobile = (number) => {
    const indianMobileRegex = /^[6-9]\d{9}$/;
    return indianMobileRegex.test(number.replace(/\D/g, ''));
  };

  const onSubmit = async (data) => {
    const { fullName,email,mobileNumber,city,...rest } = data;
    try {
      let response = await axios.post('https://uat.gatewayabroadeducations.com/api/v1/leads', {
        fullName:fullName.trim(),
        email: email.trim(),
        phone: mobileNumber,
        city: city.trim(),
        coursePreference: 'SAT',
        source: "googleAds",
        extraDetails: {
          ...rest
        }
      });
      if (response.data.success) {
        handleClose();
        localStorage.setItem('formFilled', 'true');
        navigate('/thankyou');
        reset();
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

  const nextStep = async () => {
    setStepDirection('forward');
    const valid = await trigger();
    if (valid) setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStepDirection('backward');
    setStep(prev => prev - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">SAT Exam Consultation</h3>
              <p className="text-gray-600 text-sm m-0 p-0">Why are you planning to take the SAT exam?</p>
            </div>

            {[
              { value: "To study abroad (US/UK/Canada)", label: "To study abroad (US/UK/Canada)" },
              { value: "For Indian universities accepting SAT", label: "For Indian universities accepting SAT" },
              { value: "For scholarships", label: "For scholarships" },
              { value: "Just exploring options", label: "Just exploring options" }
            ].map((option, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all duration-200"
              >
                <input
                  type="radio"
                  value={option.value}
                  {...register('satPurpose', { required: 'Please select an option' })}
                  className="w-4 h-4 text-red-600 focus:ring-red-500"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}

            {errors.satPurpose && (
              <p className="text-red-500 text-sm mt-1">{errors.satPurpose.message}</p>
            )}
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <div>
               <h3 className="text-xl font-bold text-red-700 mb-2">Education Level</h3>
            <p className="text-gray-600 text-sm">What is your current class or education level?</p>

            </div>
           
            {[
              { value: "Class 10", label: "Class 10" },
              { value: "Class 11", label: "Class 11" },
              { value: "Class 12", label: "Class 12" },
              { value: "Gap Year / College Student", label: "Gap Year / College Student" }
            ].map((option, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all duration-200"
              >
                <input
                  type="radio"
                  value={option.value}
                  {...register('educationLevel', { required: 'Please select an option' })}
                  className="w-4 h-4 text-red-600 focus:ring-red-500"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}

            {errors.educationLevel && (
              <p className="text-red-500 text-sm mt-1">{errors.educationLevel.message}</p>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Exam Timeline</h3>
            <p className="text-gray-600 text-sm">When do you plan to take your SAT exam?</p> 
            </div>
           

            {[
              { value: "Within 3 months", label: "Within 3 months" },
              { value: "3–6 months", label: "3–6 months" },
              { value: "6–12 months", label: "6–12 months" },
              { value: "Not decided yet", label: "Not decided yet" }
            ].map((option, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all duration-200"
              >
                <input
                  type="radio"
                  value={option.value}
                  {...register('examDate', { required: 'Please select an option' })}
                  className="w-4 h-4 text-red-600 focus:ring-red-500"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}

            {errors.examDate && (
              <p className="text-red-500 text-sm mt-1">{errors.examDate.message}</p>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
  <h3 className="text-xl font-bold text-red-700 mb-2">Class Mode</h3>
            <p className="text-gray-600 text-sm">Preferred mode of classes:</p>
            </div>
          

            {[
              { value: "Online", label: "Online" },
              { value: "Offline (Jaipur Center)", label: "Offline (Jaipur Center)" },
              { value: "Hybrid (Both)", label: "Hybrid (Both)" }
            ].map((option, index) => (
              <label
                key={index}
                className="flex items-center space-x-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all duration-200"
              >
                <input
                  type="radio"
                  value={option.value}
                  {...register('classMode', { required: 'Please select an option' })}
                  className="w-4 h-4 text-red-600 focus:ring-red-500"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            ))}

            {errors.classMode && (
              <p className="text-red-500 text-sm mt-1">{errors.classMode.message}</p>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div>
              
            <h3 className="text-xl font-bold text-red-700 mb-2">Contact Details</h3>
            <p className="text-gray-600 text-sm">Please provide your contact information</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  {...register('fullName', {
                    required: 'Full name is required',
                    minLength: { value: 2, message: 'Full name must be at least 2 characters' },
                    maxLength: { value: 50, message: 'Full name must be less than 50 characters' },
                    pattern: { value: /^[a-zA-Z\s]*$/, message: 'Full name can only contain letters and spaces' }
                  })}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
                  })}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  {...register('mobileNumber', {
                    required: 'Mobile number is required',
                    validate: {
                      validIndianNumber: (value) => validateIndianMobile(value) || 'Please enter a valid Indian mobile number'
                    },
                    minLength: { value: 10, message: 'Mobile number must be 10 digits' },
                    maxLength: { value: 10, message: 'Mobile number must be 10 digits' },
                    pattern: { value: /^[6-9]\d{9}$/, message: 'Mobile number must start with 6-9 and be 10 digits' }
                  })}
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.mobileNumber ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your 10-digit mobile number"
                  maxLength={10}
                />
                {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>}
                <p className="text-xs text-gray-500 mt-1">Must be a valid Indian mobile number starting with 6-9</p>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  {...register('city')}
                  className="w-full px-4 py-2.5 border rounded-xl text-sm bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your city"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isOpen && !isVisible) return null;

  return (
    <>
      <Backdrop isOpen={isVisible} onClick={handleClose} />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
        <div
          className={`relative w-full max-w-lg transform transition-all duration-300 ${isVisible
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-4 opacity-0 scale-95'
            }`}
        >
          {/* Modal Content */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl p-8 relative">

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-3 p-2 hover:bg-gray-200 bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110 z-10"
              type="button"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Progress Bar */}
            <div className="mb-4 mt-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Step {step + 1} of 5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-600 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(step + 1) / 5 * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              {renderStep()}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      <>
                        Submit
                        <Check className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                )}
              </div>
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
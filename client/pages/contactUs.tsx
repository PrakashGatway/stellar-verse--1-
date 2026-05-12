import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SATConsultation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      await axios.post("https://uat.gatewayabroadeducations.com/api/v1/leads", {
        fullName: data.fullName.trim(),
        email: data.email.trim(),
        phone: data.mobileNumber,
        city: data.city.trim(),
        coursePreference: "NA",
        source: "googleAds",
        extraDetails: data
      });

      localStorage.setItem("formFilled", "true");
      navigate("/thankyou");
      reset();
    } catch (error) {
      alert("Something went wrong! Try again.");
    }
  };

  
const logoSrc = "https://www.gatewayabroadeducations.com/images/logo.svg";
  return (
    <div className="min-h-screen bg-white flex flex-col  ">
      
    <header
      className={cn(
        "sticky top-0 z-100 transition-all  bg-white shadow-header",
        // scrolled ? "bg-white shadow-header" : "bg-background/95 backdrop-blur",
      )}
    >
      <div className="container flex items-center justify-center md:justify-between gap-4 py-3 md:py-4">
        <a href="/" className="flex items-center gap-2" >
          <img
            src={logoSrc}
            alt="Gateway Abroad"
            className="h-11 w-auto md:h-11"
            loading="lazy"
            decoding="async"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">

          <button
            // onClick={() => visiable(true)}
            className="group inline-flex items-center gap-2 rounded-xl bg-amber-400 border border-2 border-black text-black px-6 py-2 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-floating md:text-base cursor-pointer"
          >
            +91-8302092630
            {/* Book Now
            <MoveRight className="h-4 w-4 transition group-hover:translate-x-1" /> */}
          </button>
        </nav>

      </div>
    </header>
   
    <div className="flex flex-col items-center py-10 px-6">
           {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-10">
        Elevate your education and future with our 
        <span className="text-red-600 ml-2"> Consultation</span>
      </h1>

      {/* FORM CARD */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md border border-gray-200 p-8">

        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          BOOK YOUR FREE CONSULTATION
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>

          {/* Full Name */}
          <div>
            <label className="text-sm font-medium">Full Name *</label>
            <input 
              {...register("fullName", { required: true })}
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-red-500"
              placeholder="Enter Full Name"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">Required</p>}
          </div>

          {/* Mobile */}
          <div>
            <label className="text-sm font-medium">Mobile No. *</label>
            <input 
              {...register("mobileNumber", {
                required: true,
                pattern: /^[6-9]\d{9}$/
              })}
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-red-500"
              placeholder="Enter Mobile No."
              maxLength={10}
            />
            {errors.mobileNumber && (
              <p className="text-red-500 text-xs mt-1">
                Enter valid Indian 10‑digit mobile number
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email Id *</label>
            <input 
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-red-500"
              placeholder="Enter Email Id"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">Enter valid email</p>
            )}
          </div>

          {/* Degree */}
          <div>
            <label className="text-sm font-medium">Degree *</label>
            <select
              {...register("educationLevel", { required: true })}
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select Degree</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
            </select>
            {errors.educationLevel && <p className="text-red-500 text-xs mt-1">Required</p>}
          </div>

          {/* State */}
          <div className="md:col-span-1 col-span-1">
            <label className="text-sm font-medium">City *</label>
            <input 
              {...register("city", {
                required: true
              })}
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-red-500"
              placeholder="Enter City"
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">Required</p>}
          </div>

          
              <div>
                
            <label className="text-sm font-medium">Destination *</label>
                <select 
                  {...register('destination', { required: 'Destination is required' })}
                   className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-red-500"
           >
                  <option className="text-black" value="">Select Destination</option>
                  <option className="text-black" value="USA">Study In USA</option>
                  <option className="text-black" value="UK">Study In UK</option>
                  <option className="text-black" value="France">Study In France</option>
                  <option className="text-black" value="Italy">Study In Italy</option>
                  <option className="text-black" value="Dubai">Study In Dubai</option>
                  <option className="text-black" value="Germany">Study In Germany</option>
                </select>
                {errors.destination && <span className="text-red-500 text-xs mt-1">Required</span>}
              </div>


          {/* Checkbox */}
          <div className="md:col-span-2 flex items-center space-x-3 mt-2">
            <input type="checkbox" {...register("agree")} className="w-4 h-4" />
            <span className="text-sm text-gray-600">
              I agree to receive information.
            </span>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-lg transition-all"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>

        </form>
      </div>
    </div>
    </div>
  );
};

export default SATConsultation;

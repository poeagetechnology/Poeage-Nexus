import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import { 
  Building2, User, Mail, Phone, MapPin, Calendar,
  Users, Briefcase, FileText, Upload, CheckCircle,
  Loader2, AlertCircle, ArrowRight
} from "lucide-react";

export default function Hire() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industryType: "",
    workersRequired: "",
    workerType: "",
    jobRoles: [],
    location: "",
    duration: "",
    startDate: "",
    salaryRange: "",
    requirements: "",
  });

  const industryOptions = [
    "Manufacturing",
    "IT & Software",
    "Construction",
    "Retail",
    "Healthcare",
    "Logistics & Warehousing",
    "FMCG",
    "Automotive",
    "Hospitality",
    "Others"
  ];

  const workerTypeOptions = [
    "Skilled",
    "Semi-skilled",
    "Unskilled"
  ];

  const jobRoleOptions = [
    "Machine Operators",
    "Assembly Line Workers",
    "Quality Inspectors",
    "Warehouse Staff",
    "Drivers",
    "Security Guards",
    "Housekeeping",
    "Data Entry Operators",
    "Customer Service",
    "Technicians",
    "Electricians",
    "Welders",
    "Fitters",
    "Supervisors",
    "Others"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleJobRoleChange = (role) => {
    const updatedRoles = formData.jobRoles.includes(role)
      ? formData.jobRoles.filter(r => r !== role)
      : [...formData.jobRoles, role];
    setFormData({ ...formData, jobRoles: updatedRoles });
  };

  const generateReferenceNumber = () => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `PN-${timestamp}-${random}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const referenceNumber = generateReferenceNumber();

    try {
      // Prepare template parameters
      const templateParams = {
        reference_number: referenceNumber,
        company_name: formData.companyName,
        contact_person: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        industry_type: formData.industryType,
        workers_required: formData.workersRequired,
        worker_type: formData.workerType,
        job_roles: formData.jobRoles.join(", "),
        location: formData.location,
        duration: formData.duration,
        start_date: formData.startDate || "Flexible",
        salary_range: formData.salaryRange || "As per industry standards",
        requirements: formData.requirements || "None specified"
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_dk73ruq",
        process.env.REACT_APP_EMAILJS_HIRE_TEMPLATE_ID || "template_ielgg0f",
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "3Mza4yOqBPIR34fqoaYLl"
      );

      setStatus({ 
        type: "success", 
        message: `Request submitted successfully! Your reference number is: ${referenceNumber}. We'll contact you within 24 hours.` 
      });
      
      // Reset form
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        industryType: "",
        workersRequired: "",
        workerType: "",
        jobRoles: [],
        location: "",
        duration: "",
        startDate: "",
        salaryRange: "",
        requirements: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ 
        type: "error", 
        message: "Failed to submit request. Please try again or contact us directly at +91 805-688-9616" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Helmet>
        <title>Hire Workers - Poeage Nexus | Request Workforce</title>
        <meta name="description" content="Request manpower for your business. Fill out our hire request form and get workers deployed within 48-72 hours. Skilled, semi-skilled, and unskilled workforce available." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Hero Section */}
        <section className="relative py-16 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-5"></div>
          <motion.div 
            initial="hidden" 
            animate="show" 
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4 inline mr-2" />
              Request Workers
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Hire
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Workers</span>
            </h1>
            <p className="text-lg text-gray-600">
              Fill out the form below and our team will get back to you within 24 hours with suitable candidates.
            </p>
          </motion.div>
        </section>

        {/* Form Section */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10"
            >
              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl mb-8 flex items-start gap-3 ${
                    status.type === "success" 
                      ? "bg-green-50 text-green-700 border border-green-200" 
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}

              {/* Company Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  Company Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      placeholder="Enter company name"
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="company@email.com"
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="industryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Industry Type *
                    </label>
                    <select
                      id="industryType"
                      name="industryType"
                      value={formData.industryType}
                      onChange={handleChange}
                      required
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Select Industry</option>
                      {industryOptions.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Workforce Requirements */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Workforce Requirements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="workersRequired" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Workers Required *
                    </label>
                    <input
                      type="number"
                      id="workersRequired"
                      name="workersRequired"
                      value={formData.workersRequired}
                      onChange={handleChange}
                      required
                      min="1"
                      placeholder="e.g., 50"
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="workerType" className="block text-sm font-medium text-gray-700 mb-2">
                      Worker Type *
                    </label>
                    <select
                      id="workerType"
                      name="workerType"
                      value={formData.workerType}
                      onChange={handleChange}
                      required
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Select Type</option>
                      {workerTypeOptions.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Roles Needed *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {jobRoleOptions.map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => handleJobRoleChange(role)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            formData.jobRoles.includes(role)
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {formData.jobRoles.includes(role) && (
                            <CheckCircle className="w-4 h-4 inline mr-1" />
                          )}
                          {role}
                        </button>
                      ))}
                    </div>
                    {formData.jobRoles.length === 0 && (
                      <p className="text-xs text-gray-500 mt-2">Select at least one job role</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Deployment Details */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Deployment Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Deployment Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="City, State"
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration *
                    </label>
                    <div className="flex gap-3">
                      {["Temporary", "Permanent", "Contract"].map((option) => (
                        <label
                          key={option}
                          className={`flex-1 p-3 rounded-xl border cursor-pointer text-center transition-all ${
                            formData.duration === option
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          <input
                            type="radio"
                            name="duration"
                            value={option}
                            checked={formData.duration === option}
                            onChange={handleChange}
                            className="sr-only"
                            required
                          />
                          <span className="text-sm font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date Required
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="salaryRange" className="block text-sm font-medium text-gray-700 mb-2">
                      Salary Range Budget (Monthly)
                    </label>
                    <input
                      type="text"
                      id="salaryRange"
                      name="salaryRange"
                      value={formData.salaryRange}
                      onChange={handleChange}
                      placeholder="e.g., ₹15,000 - ₹20,000"
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Requirements */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Additional Information
                </h3>
                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any specific skills, certifications, experience, or other requirements..."
                    className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || formData.jobRoles.length === 0}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-3 ${
                  (isSubmitting || formData.jobRoles.length === 0) 
                    ? "opacity-70 cursor-not-allowed" 
                    : "hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    Submit Request <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              <p className="text-center text-gray-500 text-sm mt-4">
                By submitting, you agree to our Terms of Service and Privacy Policy.
                We'll contact you within 24 hours.
              </p>
            </motion.form>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-4">
              Need immediate assistance? Call us directly:
            </p>
            <a 
              href="tel:+918056889616"
              className="inline-flex items-center gap-2 text-2xl font-bold text-blue-600 hover:text-blue-700"
            >
              <Phone className="w-6 h-6" />
              +91 805-688-9616
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

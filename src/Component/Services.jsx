import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { 
  Users, ClipboardCheck, Target, Building2, 
  Wallet, BookOpen, ShieldCheck, Scale,
  Factory, Laptop, HardHat, Stethoscope, 
  ShoppingCart, Truck, ChevronDown, ArrowRight, CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: "manpower",
      icon: <Users className="w-8 h-8" />,
      title: "Manpower Supply",
      shortDesc: "Skilled & unskilled workforce for all industries",
      fullDesc: "We provide comprehensive manpower supply solutions including skilled technicians, semi-skilled workers, and general labor. Our workforce is thoroughly vetted, trained, and ready for immediate deployment across manufacturing, construction, logistics, and service sectors.",
      features: ["Skilled & Semi-skilled Workers", "Background Verified", "Industry-ready Training", "Flexible Deployment"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "staffing",
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Contract Staffing",
      shortDesc: "Temporary workforce on contract basis",
      fullDesc: "Our contract staffing solutions help businesses manage seasonal demands, project-based requirements, and temporary workforce needs. We handle all employment-related compliance while you focus on your core business operations.",
      features: ["Short & Long-term Contracts", "Compliance Managed", "Quick Onboarding", "Cost-effective"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: "recruitment",
      icon: <Target className="w-8 h-8" />,
      title: "Permanent Recruitment",
      shortDesc: "Full-time hiring solutions for your team",
      fullDesc: "Our permanent recruitment services help you find the perfect candidates for full-time positions. We use advanced screening methods, skill assessments, and cultural fit evaluation to ensure quality hires that stay.",
      features: ["Executive Search", "Bulk Recruitment", "Campus Hiring", "Replacement Guarantee"],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "hr",
      icon: <Building2 className="w-8 h-8" />,
      title: "HR Outsourcing",
      shortDesc: "Complete HR management services",
      fullDesc: "Outsource your entire HR function to our expert team. From employee onboarding to exit management, we handle all aspects of human resources including policy development, employee relations, and HR analytics.",
      features: ["End-to-end HR Management", "Policy Development", "Employee Relations", "HR Analytics & Reporting"],
      color: "from-green-500 to-green-600"
    },
    {
      id: "payroll",
      icon: <Wallet className="w-8 h-8" />,
      title: "Payroll Management",
      shortDesc: "Salary processing & compliance",
      fullDesc: "Our payroll management services ensure accurate and timely salary processing, tax calculations, and statutory compliance. We manage PF, ESI, professional tax, and generate comprehensive payroll reports.",
      features: ["Salary Processing", "Tax Compliance", "PF & ESI Management", "Payslip Generation"],
      color: "from-amber-500 to-amber-600"
    },
    {
      id: "training",
      icon: <BookOpen className="w-8 h-8" />,
      title: "Training & Development",
      shortDesc: "Worker skill enhancement programs",
      fullDesc: "Enhance your workforce capabilities with our customized training programs. We offer technical skill development, soft skills training, safety compliance courses, and industry-specific certifications.",
      features: ["Technical Training", "Soft Skills Development", "Safety Training", "Certification Programs"],
      color: "from-pink-500 to-pink-600"
    },
    {
      id: "verification",
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Background Verification",
      shortDesc: "Employee verification services",
      fullDesc: "Comprehensive background verification services including identity verification, address verification, employment history, education verification, and criminal background checks to ensure you hire trustworthy candidates.",
      features: ["Identity Verification", "Address Verification", "Employment History", "Criminal Background Check"],
      color: "from-red-500 to-red-600"
    },
    {
      id: "compliance",
      icon: <Scale className="w-8 h-8" />,
      title: "Compliance Management",
      shortDesc: "Labour law & statutory compliance",
      fullDesc: "Stay compliant with all labor laws and statutory requirements. We manage compliance with Shops & Establishments Act, Factory Act, Contract Labour Act, Minimum Wages Act, and other applicable regulations.",
      features: ["Labor Law Compliance", "Statutory Returns", "Audit Support", "License Management"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const industries = [
    { icon: <Factory className="w-6 h-6" />, name: "Manufacturing" },
    { icon: <Laptop className="w-6 h-6" />, name: "IT & Software" },
    { icon: <HardHat className="w-6 h-6" />, name: "Construction" },
    { icon: <Stethoscope className="w-6 h-6" />, name: "Healthcare" },
    { icon: <ShoppingCart className="w-6 h-6" />, name: "Retail" },
    { icon: <Truck className="w-6 h-6" />, name: "Logistics" },
  ];

  const whyChooseUs = [
    { title: "20,000+", desc: "Workers Deployed" },
    { title: "95%", desc: "Client Retention Rate" },
    { title: "48 Hrs", desc: "Average Deployment Time" },
    { title: "100%", desc: "Statutory Compliance" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Helmet>
        <title>Our Services - Poeage Nexus | Manpower & Staffing Solutions</title>
        <meta name="description" content="Comprehensive workforce solutions including manpower supply, contract staffing, HR outsourcing, payroll management, and compliance services. Partner with Poeage Nexus for all your staffing needs." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-5"></div>
          <motion.div 
            initial="hidden" 
            animate="show" 
            variants={fadeUp}
            className="max-w-6xl mx-auto text-center relative z-10"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Comprehensive Workforce
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From manpower supply to complete HR outsourcing, we provide end-to-end workforce solutions 
              that help businesses scale efficiently while staying compliant.
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${expandedService === service.id ? 'md:col-span-2 md:row-span-2' : ''}`}
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                >
                  <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                    <div className="flex items-center justify-between">
                      {service.icon}
                      <ChevronDown className={`w-5 h-5 transition-transform ${expandedService === service.id ? 'rotate-180' : ''}`} />
                    </div>
                    <h3 className="text-xl font-bold mt-4">{service.title}</h3>
                    <p className="text-white/80 text-sm mt-2">{service.shortDesc}</p>
                  </div>
                  
                  <motion.div 
                    initial={false}
                    animate={{ height: expandedService === service.id ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{service.fullDesc}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-2 mt-4 text-blue-600 font-medium hover:gap-3 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Get Quote <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-gray-600">Tailored workforce solutions for every sector</p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600 mb-3">
                    {industry.icon}
                  </div>
                  <span className="font-medium text-gray-700 text-center">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white"
            >
              <h2 className="text-3xl font-bold text-center mb-10">Why Choose Poeage Nexus?</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-4xl font-extrabold mb-2">{item.title}</p>
                    <p className="text-white/80">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get in touch with our experts to discuss your staffing needs and discover 
              how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/hire"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                Request Workers <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}

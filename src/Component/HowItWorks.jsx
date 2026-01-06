import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  FileText, Search, Users, Rocket, HeadphonesIcon,
  ArrowRight, ChevronDown, Clock, CheckCircle2,
  Shield, Zap, Award, ThumbsUp
} from "lucide-react";

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    {
      number: "01",
      icon: <FileText className="w-8 h-8" />,
      title: "Share Your Requirements",
      description: "Tell us about your workforce needs. Submit details about job roles, number of workers, skills required, and deployment location.",
      timeline: "Day 1",
      color: "blue"
    },
    {
      number: "02",
      icon: <Search className="w-8 h-8" />,
      title: "We Source Talent",
      description: "Our team searches our extensive database and networks to find candidates matching your requirements. We conduct initial screening and skill assessments.",
      timeline: "Day 1-3",
      color: "cyan"
    },
    {
      number: "03",
      icon: <Users className="w-8 h-8" />,
      title: "Interview & Select",
      description: "We present shortlisted candidates for your review. You can interview and select the workers who best fit your organization's needs.",
      timeline: "Day 3-5",
      color: "purple"
    },
    {
      number: "04",
      icon: <Rocket className="w-8 h-8" />,
      title: "Deployment",
      description: "Selected workers are onboarded, documented, and deployed to your site. We handle all compliance, contracts, and documentation.",
      timeline: "Day 5-7",
      color: "green"
    },
    {
      number: "05",
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "We provide continuous HR support, handle payroll, manage attendance, and ensure worker satisfaction throughout the engagement.",
      timeline: "Ongoing",
      color: "amber"
    }
  ];

  const benefits = [
    { icon: <Clock className="w-6 h-6" />, title: "Quick Turnaround", desc: "Workers deployed within 48-72 hours" },
    { icon: <Shield className="w-6 h-6" />, title: "100% Compliance", desc: "All statutory requirements handled" },
    { icon: <Zap className="w-6 h-6" />, title: "Flexible Scaling", desc: "Scale up or down as needed" },
    { icon: <Award className="w-6 h-6" />, title: "Quality Assured", desc: "Pre-screened & verified workers" },
  ];

  const faqs = [
    {
      question: "How quickly can you deploy workers?",
      answer: "For most requirements, we can deploy workers within 48-72 hours. Larger deployments of 100+ workers typically take 1-2 weeks with a phased approach to ensure quality."
    },
    {
      question: "What documents do you handle?",
      answer: "We handle all employment documentation including offer letters, contracts, ID verification, background checks, bank account setup, PF/ESI registration, and all statutory compliance requirements."
    },
    {
      question: "Do you provide workers for short-term projects?",
      answer: "Yes, we offer flexible staffing solutions for both short-term (daily/weekly) and long-term requirements. There's no minimum commitment period."
    },
    {
      question: "How do you ensure worker quality?",
      answer: "All workers undergo our rigorous screening process including skill assessment, background verification, reference checks, and industry-specific certifications where applicable."
    },
    {
      question: "What happens if a worker doesn't perform well?",
      answer: "We offer a replacement guarantee. If a worker doesn't meet expectations, we'll provide a replacement within 24-48 hours at no additional cost."
    },
    {
      question: "How is payroll managed?",
      answer: "We handle complete payroll management including salary processing, tax deductions, PF/ESI contributions, and provide detailed payslips. You receive a single consolidated invoice."
    },
    {
      question: "Can you provide workers across multiple locations?",
      answer: "Yes, we have a pan-India presence and can deploy workers across multiple cities and states. We maintain regional databases for faster local deployment."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in Manufacturing, IT, Construction, Healthcare, Retail, Logistics, and FMCG. However, we can provide workers for virtually any industry based on your requirements."
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Helmet>
        <title>How It Works - Poeage Nexus | Simple Hiring Process</title>
        <meta name="description" content="Learn how Poeage Nexus makes hiring simple. Our 5-step process ensures you get quality workers deployed within 48-72 hours. Share requirements, we handle the rest." />
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
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              How We
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Work</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined 5-step process makes hiring workforce simple and hassle-free. 
              From requirement to deployment, we handle everything.
            </p>
          </motion.div>
        </section>

        {/* Timeline Steps */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-green-500 rounded-full"></div>

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                    >
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className={`text-4xl font-extrabold text-${step.color}-500 opacity-50`}>
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <span className={`inline-block px-3 py-1 bg-${step.color}-100 text-${step.color}-700 rounded-full text-sm font-medium`}>
                        <Clock className="w-4 h-4 inline mr-1" />
                        {step.timeline}
                      </span>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 rounded-2xl flex items-center justify-center text-white shadow-lg z-10`}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Empty Space */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Process?</h2>
              <p className="text-gray-600">Benefits of partnering with Poeage Nexus</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Everything you need to know about our hiring process</p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-600">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-cyan-500">
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <ThumbsUp className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Hire?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get started today and have workers deployed within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/hire"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                Request Workers <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-all"
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}

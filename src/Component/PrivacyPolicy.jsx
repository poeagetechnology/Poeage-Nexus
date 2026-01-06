import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Database, Cookie, Users, Lock, Mail, ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, and company details when you fill out forms on our website.",
        "Employment Information: Resume, work experience, skills, and qualifications when you apply for jobs.",
        "Usage Data: Information about how you interact with our website, including pages visited, time spent, and browser type.",
        "Device Information: IP address, device type, operating system, and other technical data collected automatically."
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "How We Use Information",
      content: [
        "To process job applications and connect candidates with employers.",
        "To respond to your inquiries and provide customer support.",
        "To send relevant job opportunities and company updates (with your consent).",
        "To improve our services and website functionality.",
        "To comply with legal obligations and protect our rights."
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Storage & Security",
      content: [
        "We implement industry-standard security measures to protect your personal information.",
        "Data is stored on secure servers with encrypted connections (SSL/TLS).",
        "Access to personal data is restricted to authorized personnel only.",
        "We regularly review and update our security practices.",
        "We retain your data only as long as necessary for the purposes outlined in this policy."
      ]
    },
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "Cookie Policy",
      content: [
        "We use cookies to enhance your browsing experience and analyze website traffic.",
        "Essential cookies are required for basic website functionality.",
        "Analytics cookies help us understand how visitors interact with our site.",
        "You can control cookie preferences through your browser settings.",
        "Third-party cookies may be used for analytics (Google Analytics) and social media integration."
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Third-Party Services",
      content: [
        "We may share information with trusted third parties who assist in operating our website.",
        "These parties are obligated to maintain confidentiality of your information.",
        "We use EmailJS for form submissions, which has its own privacy practices.",
        "Analytics services like Google Analytics collect anonymous usage data.",
        "We do not sell your personal information to third parties."
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "Access: You have the right to request copies of your personal data.",
        "Rectification: You can request correction of inaccurate information.",
        "Erasure: You can request deletion of your personal data (subject to legal requirements).",
        "Opt-out: You can unsubscribe from marketing communications at any time.",
        "Data Portability: You can request your data in a portable format."
      ]
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Poeage Nexus</title>
        <meta name="description" content="Read Poeage Nexus's privacy policy to understand how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <Shield className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
              <p className="text-white/80">
                Last updated: January 2, 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <p className="text-gray-700 leading-relaxed">
                At Poeage Nexus, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By using our website and services, you agree to the terms of this Privacy Policy. 
                If you do not agree with our practices, please do not use our services.
              </p>
            </motion.div>

            {/* Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl shadow-lg p-8 mb-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact for Privacy */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6" />
                <h2 className="text-xl font-bold">Contact for Privacy Concerns</h2>
              </div>
              <p className="text-white/90 mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights 
                regarding your personal data, please contact us:
              </p>
              <div className="space-y-2">
                <p>Email: <a href="mailto:privacy@poeagenexus.com" className="underline">privacy@poeagenexus.com</a></p>
                <p>Phone: <a href="tel:+918056889616" className="underline">+91 805-688-9616</a></p>
                <p>Address: Tamil Nadu, India</p>
              </div>
            </motion.div>

            {/* Back Link */}
            <div className="mt-8 text-center">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

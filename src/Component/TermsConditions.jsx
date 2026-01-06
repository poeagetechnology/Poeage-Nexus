import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, CheckCircle, AlertTriangle, Scale, ArrowLeft } from "lucide-react";

export default function TermsConditions() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using the Poeage Nexus website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.`
    },
    {
      title: "2. Services Description",
      content: `Poeage Nexus provides manpower supply, staffing solutions, HR outsourcing, and related workforce management services. Our services include but are not limited to:
      
• Temporary and permanent staffing solutions
• Contract staffing and payroll management
• HR consulting and compliance services
• Worker recruitment and deployment
• Background verification services

We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.`
    },
    {
      title: "3. User Obligations",
      content: `As a user of our services, you agree to:

• Provide accurate and complete information when using our services
• Not misrepresent your identity or company affiliation
• Use our services only for lawful purposes
• Not interfere with or disrupt our website or services
• Not attempt to gain unauthorized access to our systems
• Comply with all applicable laws and regulations
• Treat deployed workers fairly and in accordance with labor laws`
    },
    {
      title: "4. Client Responsibilities",
      content: `Clients using our workforce services agree to:

• Provide a safe working environment for deployed workers
• Pay agreed-upon fees within the specified timeframe
• Comply with all applicable employment and labor laws
• Not directly hire our deployed workers without prior agreement
• Provide adequate supervision and necessary resources
• Report any workplace incidents or issues promptly
• Maintain confidentiality of worker personal information`
    },
    {
      title: "5. Job Seekers/Candidates",
      content: `Job seekers using our platform agree to:

• Provide accurate information in job applications
• Not misrepresent qualifications, skills, or experience
• Attend scheduled interviews and deployments as committed
• Maintain professional conduct during employment
• Inform us of any changes in availability or circumstances
• Not engage in any fraudulent or illegal activities`
    },
    {
      title: "6. Payment Terms",
      content: `• All fees for services will be communicated in advance
• Payment is due as per the terms specified in the service agreement
• Late payments may attract interest charges and service suspension
• All prices are subject to applicable taxes
• We reserve the right to modify our pricing with prior notice`
    },
    {
      title: "7. Intellectual Property",
      content: `All content on this website, including text, graphics, logos, images, and software, is the property of Poeage Nexus and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.`
    },
    {
      title: "8. Limitation of Liability",
      content: `To the maximum extent permitted by law:

• Poeage Nexus shall not be liable for any indirect, incidental, or consequential damages
• Our total liability shall not exceed the fees paid for the specific service
• We do not guarantee the performance of deployed workers beyond our standard screening
• We are not responsible for actions of workers outside their work responsibilities
• We do not guarantee job placement for candidates`
    },
    {
      title: "9. Confidentiality",
      content: `Both parties agree to maintain confidentiality of:

• Business information shared during the engagement
• Worker personal data and employment records
• Client business operations and requirements
• Pricing and contractual terms

This obligation survives the termination of services.`
    },
    {
      title: "10. Termination",
      content: `Either party may terminate services:

• With written notice as specified in the service agreement
• Immediately in case of material breach of these terms
• Upon mutual agreement

Upon termination, all outstanding payments become immediately due.`
    },
    {
      title: "11. Dispute Resolution",
      content: `Any disputes arising from these terms or our services shall be:

• First attempted to be resolved through amicable negotiation
• If unresolved, submitted to arbitration under Indian Arbitration Act
• Subject to the exclusive jurisdiction of courts in Tamil Nadu, India`
    },
    {
      title: "12. Governing Law",
      content: `These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Tamil Nadu, India.`
    },
    {
      title: "13. Changes to Terms",
      content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective upon posting on our website. Continued use of our services after any changes constitutes acceptance of the new terms.`
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Poeage Nexus</title>
        <meta name="description" content="Read Poeage Nexus's terms and conditions for using our manpower supply and staffing services." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <Scale className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h1 className="text-4xl font-extrabold mb-4">Terms & Conditions</h1>
              <p className="text-white/80">
                Last updated: January 2, 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Introduction Notice */}
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 flex items-start gap-4"
            >
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                <p className="text-amber-700">
                  Please read these Terms and Conditions carefully before using our services. 
                  By using our website and services, you agree to be bound by these terms.
                </p>
              </div>
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
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  {section.title}
                </h2>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6" />
                <h2 className="text-xl font-bold">Questions About These Terms?</h2>
              </div>
              <p className="text-white/90 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2">
                <p>Email: <a href="mailto:legal@poeagenexus.com" className="underline">legal@poeagenexus.com</a></p>
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

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import { 
  Mail, Phone, MapPin, Send, Clock, 
  MessageCircle, CheckCircle, Loader2,
  Facebook, Instagram, Linkedin, Twitter
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_dk73ruq",
        process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID || "template_ielgg0f",
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "3Mza4yOqBPIR34fqoaYLl"
      );
      
      setStatus({ type: "success", message: "Message sent successfully! We'll get back to you soon." });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ type: "error", message: "Failed to send message. Please try again or contact us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 805-688-9616",
      link: "tel:+918056889616",
      color: "cyan"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@poeagenexus.com",
      link: "mailto:contact@poeagenexus.com",
      color: "blue"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Tamil Nadu, India",
      link: "https://maps.google.com/?q=Tamil+Nadu,India",
      color: "purple"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      link: null,
      color: "green"
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  ];

  const faqs = [
    {
      question: "How quickly can you deploy workers?",
      answer: "We can typically deploy workers within 48-72 hours for most requirements. For larger deployments, we work with you to create a phased rollout plan."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve manufacturing, IT, construction, healthcare, retail, logistics, and many other industries. Contact us to discuss your specific needs."
    },
    {
      question: "Do you provide trained workers?",
      answer: "Yes, all our workers undergo background verification and skill assessment. We also offer custom training programs based on your requirements."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Poeage Nexus | Get in Touch</title>
        <meta name="description" content="Contact Poeage Nexus for manpower supply, staffing solutions, and HR services. Reach us at +91 805-688-9616 or email contact@poeagenexus.com." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 text-gray-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <motion.div
          className="hidden md:block absolute top-10 right-10 w-60 h-60 bg-cyan-300 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="hidden md:block absolute bottom-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-[120px] opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        {/* Hero Section */}
        <section className="pt-20 pb-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Get in Touch with
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Poeage Nexus</span>
            </h1>
            <p className="text-lg text-gray-600">
              Have questions about our services? We're here to help. Reach out and let's discuss your workforce needs.
            </p>
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className={`p-3 bg-${info.color}-100 text-${info.color}-600 rounded-xl w-fit mb-3`}>
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/918056889616?text=Hello! I'm interested in your workforce solutions."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-green-500 text-white p-5 rounded-2xl hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="w-8 h-8" />
                <div>
                  <p className="font-semibold">Chat on WhatsApp</p>
                  <p className="text-sm text-green-100">Get quick response within minutes</p>
                </div>
              </motion.a>

              {/* Social Links */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-3 bg-gray-100 rounded-xl hover:bg-blue-100 hover:text-blue-600 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <iframe
                  title="Poeage Nexus Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d78.123456789!3d11.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA3JzI0LjQiTiA3OMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl mb-6 flex items-center gap-3 ${
                      status.type === "success" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Mail className="w-5 h-5" />
                    )}
                    {status.message}
                  </motion.div>
                )}

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Tell us about your workforce requirements..."
                      className="w-full p-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-3 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </div>

                <p className="text-center text-gray-500 text-sm mt-4">
                  We typically respond within 24 hours
                </p>
              </form>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Quick answers to common questions</p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

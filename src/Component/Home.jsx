import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, Building2, MapPin, TrendingUp,
  ClipboardCheck, Target, Wallet, ShieldCheck,
  Factory, Laptop, HardHat, Stethoscope, ShoppingCart, Truck,
  CheckCircle, Star, Quote, Phone
} from 'lucide-react';

export default function Home() {
  const stats = [
    { value: "20K+", label: "Workers Deployed", icon: <Users className="w-6 h-6" /> },
    { value: "30+", label: "Happy Clients", icon: <Building2 className="w-6 h-6" /> },
    { value: "25+", label: "Cities Covered", icon: <MapPin className="w-6 h-6" /> },
    { value: "2+", label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> },
  ];

  const services = [
    { icon: <Users className="w-8 h-8" />, title: "Manpower Supply", desc: "Skilled & unskilled workforce", color: "blue" },
    { icon: <ClipboardCheck className="w-8 h-8" />, title: "Contract Staffing", desc: "Temporary workforce solutions", color: "cyan" },
    { icon: <Target className="w-8 h-8" />, title: "Permanent Recruitment", desc: "Full-time hiring solutions", color: "purple" },
    { icon: <Wallet className="w-8 h-8" />, title: "Payroll Management", desc: "Complete payroll services", color: "green" },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Background Verification", desc: "Employee verification", color: "amber" },
    { icon: <Building2 className="w-8 h-8" />, title: "HR Outsourcing", desc: "Complete HR management", color: "pink" },
  ];

  const processSteps = [
    { num: "01", title: "Share Requirements", desc: "Tell us your workforce needs" },
    { num: "02", title: "We Source Talent", desc: "We find matching candidates" },
    { num: "03", title: "Interview & Select", desc: "You choose the best fit" },
    { num: "04", title: "Deployment", desc: "Workers onboarded & deployed" },
  ];

  const industries = [
    { icon: <Factory className="w-6 h-6" />, name: "Manufacturing" },
    { icon: <Laptop className="w-6 h-6" />, name: "IT & Software" },
    { icon: <HardHat className="w-6 h-6" />, name: "Construction" },
    { icon: <Stethoscope className="w-6 h-6" />, name: "Healthcare" },
    { icon: <ShoppingCart className="w-6 h-6" />, name: "Retail" },
    { icon: <Truck className="w-6 h-6" />, name: "Logistics" },
  ];

  const clientLogos = [
    { name: "TATA Motors", logo: "https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo-1988.png" },
    { name: "MRF Tyres", logo: "https://i.pinimg.com/736x/81/8d/6e/818d6e280da3c9660adfdcf8ec8ec2d2.jpg" },
    { name: "Mahindra", logo: "https://download.logo.wine/logo/Mahindra_%26_Mahindra/Mahindra_%26_Mahindra-Logo.wine.png" },
  ];

  const testimonials = [
    {
      quote: "Poeage Nexus delivered exceptional results under tight deadlines. Their workforce quality exceeded our expectations.",
      author: "Plant Manager",
      company: "TATA Motors.",
      rating: 5
    },
    {
      quote: "The combination of recruitment and training services helped us build a highly skilled workforce.",
      author: "HR Director",
      company: "MRF Tyres",
      rating: 5
    },
    {
      quote: "Their flexible staffing model allows us to scale our workforce efficiently based on production demands.",
      author: "Operations Head",
      company: "Mahindra & Mahindra",
      rating: 5
    },
  ];

  const usps = [
    { icon: <CheckCircle className="w-6 h-6" />, title: "48hr Deployment", desc: "Quick workforce mobilization" },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "100% Compliant", desc: "All statutory requirements met" },
    { icon: <Users className="w-6 h-6" />, title: "Verified Workers", desc: "Background checked & trained" },
    { icon: <Phone className="w-6 h-6" />, title: "24/7 Support", desc: "Round the clock assistance" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Helmet>
        <title>Poeage Nexus – Manpower Supply, Staffing & HR Solutions</title>
        <meta name="description" content="Poeage Nexus provides reliable manpower supply, staffing solutions, HR outsourcing, and recruitment services for industries across India. Get skilled workforce deployed in 48 hours." />
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-100 via-white to-cyan-100 overflow-hidden flex items-center px-6 py-20">
          {/* Background Blurs */}
          <motion.div
            className="absolute top-10 left-10 w-60 h-60 bg-cyan-400/20 rounded-full blur-[90px] md:w-80 md:h-80"
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 10 }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[110px] md:w-[28rem] md:h-[28rem]"
            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 9 }}
          />

          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
              >
                #1 Workforce Solutions Provider
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900"
              >
                Poeage Manpower
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Supply & Consultancy
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-6 text-gray-600 text-lg max-w-lg mx-auto lg:mx-0"
              >
                Providing industry-ready workforce and consultancy services to help companies hire
                qualified, skilled, and reliable talent within 48 hours.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/hire"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Hire Talent <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/work"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all"
                >
                  How It Works
                </Link>
              </motion.div>

              {/* Quick Stats in Hero */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">20K+</p>
                  <p className="text-sm text-gray-500">Workers</p>
                </div>
                <div className="w-px h-10 bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">30+</p>
                  <p className="text-sm text-gray-500">Clients</p>
                </div>
                <div className="w-px h-10 bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">48hrs</p>
                  <p className="text-sm text-gray-500">Deployment</p>
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <img
                src="https://www.poeage.com/static/media/hero.0f6d39dbe780e0b1eccd.png"
                alt="Manpower Solutions"
                className="w-72 md:w-[450px] drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 px-6 bg-gradient-to-r from-blue-600 to-cyan-500">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <div className="flex justify-center mb-2 opacity-80">{stat.icon}</div>
                  <p className="text-3xl md:text-4xl font-extrabold">{stat.value}</p>
                  <p className="text-white/80 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <span className="text-blue-600 font-medium">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Services</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Comprehensive workforce solutions tailored to your industry needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to="/services"
                    className="block p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all"
                  >
                    <div className={`w-14 h-14 bg-${service.color}-100 text-${service.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Link 
                to="/services"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <span className="text-blue-600 font-medium">Simple Process</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">How It Works</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Get your workforce deployed in 4 simple steps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gray-50 p-6 rounded-2xl text-center">
                    <span className="text-5xl font-extrabold text-blue-100">{step.num}</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Link 
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <span className="text-blue-600 font-medium">Diverse Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Industries We Serve</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mb-3">
                    {industry.icon}
                  </div>
                  <span className="font-medium text-gray-700 text-center">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-10"
            >
              <span className="text-blue-600 font-medium">Trusted Partners</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">Our Clients</h2>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-12">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grayscale hover:grayscale-0 transition-all"
                >
                  <img src={client.logo} alt={client.name} className="h-16 object-contain" />
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <Link 
                to="/clients"
                className="text-blue-600 font-medium hover:underline"
              >
                View All Clients →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <span className="text-blue-600 font-medium">What Clients Say</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Testimonials</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-200 mb-2" />
                  <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <span className="text-blue-600 font-medium">Our Advantages</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Why Choose Us?</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {usps.map((usp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-2xl text-center"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4">
                    {usp.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{usp.title}</h3>
                  <p className="text-gray-600 text-sm">{usp.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your Workforce?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get skilled workers deployed within 48 hours. Let's discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/hire"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                Request Workers <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="tel:+918056889616"
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +91 805-688-9616
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}

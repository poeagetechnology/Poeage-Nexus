import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { 
  Users, Building2, MapPin, TrendingUp, Award, 
  Calendar, ArrowRight, Filter, Play, Quote
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "20,000+", label: "Workers Deployed" },
    { icon: <Building2 className="w-6 h-6" />, value: "15+", label: "Industries Served" },
    { icon: <MapPin className="w-6 h-6" />, value: "25+", label: "Cities Covered" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "95%", label: "Client Retention" },
  ];

  const caseStudies = [
    {
      id: 1,
      client: "TATA Motors",
      industry: "Automotive",
      logo: "https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo-1988.png",
      challenge: "Required 500+ skilled workers within 2 weeks for new production line expansion",
      solution: "Deployed rapid recruitment strategy with pre-screened candidate database",
      results: ["500 workers deployed in 12 days", "98% attendance rate", "Zero safety incidents", "15% above production targets"],
      timeline: "2 weeks",
      workersDeployed: 500,
      testimonial: "Poeage Nexus delivered exceptional results under tight deadlines. Their workforce quality exceeded our expectations.",
      testimonialAuthor: "Plant Manager, TATA Motors"
    },
    {
      id: 2,
      client: "MRF Tyres",
      industry: "Manufacturing",
      logo: "https://i.pinimg.com/736x/81/8d/6e/818d6e280da3c9660adfdcf8ec8ec2d2.jpg",
      challenge: "Needed specialized rubber technicians with industry certifications",
      solution: "Provided training programs combined with skilled worker placement",
      results: ["200 certified technicians placed", "Custom training program developed", "40% reduction in rejection rate", "Ongoing skill development"],
      timeline: "1 month",
      workersDeployed: 200,
      testimonial: "The combination of recruitment and training services helped us build a highly skilled workforce.",
      testimonialAuthor: "HR Director, MRF Tyres"
    },
    {
      id: 3,
      client: "Mahindra & Mahindra",
      industry: "Automotive",
      logo: "https://download.logo.wine/logo/Mahindra_%26_Mahindra/Mahindra_%26_Mahindra-Logo.wine.png",
      challenge: "Seasonal workforce requirements with variable demand",
      solution: "Implemented flexible contract staffing model with scalable deployment",
      results: ["Flexible workforce of 300-800 workers", "25% cost savings", "Quick ramp-up capability", "Seamless payroll management"],
      timeline: "Ongoing",
      workersDeployed: 800,
      testimonial: "Their flexible staffing model allows us to scale our workforce efficiently based on production demands.",
      testimonialAuthor: "Operations Head, Mahindra"
    },
    {
      id: 4,
      client: "TVS Electronics",
      industry: "Electronics",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/TVS_logo.svg/1200px-TVS_logo.svg.png",
      challenge: "Assembly line workers with precision manufacturing experience",
      solution: "Recruited and deployed skilled assembly technicians with quality focus",
      results: ["150 workers deployed", "99.2% quality pass rate", "Zero defect culture established", "Reduced training time by 30%"],
      timeline: "3 weeks",
      workersDeployed: 150,
      testimonial: "Quality of workers from Poeage Nexus has significantly improved our production efficiency.",
      testimonialAuthor: "Quality Manager, TVS Electronics"
    },
    {
      id: 5,
      client: "L&T Construction",
      industry: "Construction",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larsen_%26_Toubro_logo.svg/2560px-Larsen_%26_Toubro_logo.svg.png",
      challenge: "Large-scale infrastructure project requiring diverse skilled workers",
      solution: "Multi-skill deployment including masons, electricians, welders, and supervisors",
      results: ["1000+ workers across 5 sites", "Project completed on schedule", "Safety compliance 100%", "Reduced contractor management overhead"],
      timeline: "6 months",
      workersDeployed: 1000,
      testimonial: "Poeage Nexus simplified our workforce management across multiple project sites.",
      testimonialAuthor: "Project Director, L&T"
    }
  ];

  const industries = ["All", "Automotive", "Manufacturing", "Electronics", "Construction"];

  const filteredStudies = selectedIndustry === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Helmet>
        <title>Our Projects & Case Studies - Poeage Nexus</title>
        <meta name="description" content="Explore our successful workforce deployment projects and case studies. See how Poeage Nexus has helped leading companies like TATA Motors, MRF, and Mahindra with their staffing needs." />
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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Success Stories &
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Case Studies</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped leading organizations build their workforce 
              and achieve operational excellence.
            </p>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-extrabold text-gray-900">{stat.value}</p>
                  <p className="text-gray-600 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-gray-600">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filter by Industry:</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedIndustry === industry
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto space-y-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Left - Client Info */}
                  <div className="p-8 bg-gradient-to-br from-gray-50 to-white border-r border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center p-3">
                        <img src={study.logo} alt={study.client} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{study.client}</h3>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mt-1">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">Timeline: {study.timeline}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{study.workersDeployed} Workers Deployed</span>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <Quote className="w-6 h-6 text-blue-400 mb-2" />
                      <p className="text-gray-700 text-sm italic">"{study.testimonial}"</p>
                      <p className="text-blue-600 text-xs font-medium mt-2">— {study.testimonialAuthor}</p>
                    </div>
                  </div>

                  {/* Right - Case Details */}
                  <div className="md:col-span-2 p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-2">Challenge</h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Solution</h4>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-3">Results</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {study.results.map((result, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Award className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
              <p className="text-gray-600">Hear from our satisfied clients about their experience</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-video flex items-center justify-center cursor-pointer group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-cyan-500/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10">
                    <Play className="w-8 h-8 text-blue-600 ml-1" />
                  </div>
                  <p className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    Watch Video Testimonial
                  </p>
                </motion.div>
              ))}
            </div>
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our growing list of satisfied clients and experience the Poeage Nexus difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/hire"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
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
